import { inject, injectable } from 'inversify';

import { TYPES } from 'src/iocTypes';
import { AppConfigService } from 'src/models/config';
import { ApiHandlerParams, ApiHandlerResponse, ApiHandlerTypes, getHandler } from './calls';
import { ApiError, isApiError } from './error';
import { Request } from './makeHandler';

type ProtoError = {
  error: {
    status: number;
    message: string;
    detail?: string[];
  };
};

@injectable()
export class Api {
  private base: string;
  private timeout: number;
  private token?: string;

  constructor(@inject(TYPES.ConfigService) private configService: AppConfigService) {
    const config = configService.getApplicationConfig();

    this.base = config.baseApiUrl;
    this.timeout = config.apiTimeout ?? 30 * 1000;
  }

  call<T extends ApiHandlerTypes>(
    type: T,
    params: ApiHandlerParams<T>,
  ): Promise<ApiHandlerResponse<T>>;
  call(type: any, params: any): any {
    const h = getHandler(type);
    const request = h.prepare(params);

    const result = this.makeRequestInternal({
      ...request,
      headers: {
        // aditional headers like device signature
        ...request.headers,
      },
    }).then((data) => h.decode(data));

    if (this.configService.onApiError) {
      result.catch((e) => this.configService.onApiError(e));
    }

    return result;
  }

  setToken(token: string) {
    this.token = token;
  }

  private makeRequestInternal(params: Request) {
    const url = this.base + params.path;
    const headers: Record<string, string> = {
      Accept: 'application/json',
      ...params.headers,
    };

    const init: RequestInit = {
      method: params.method,
      headers,
    };

    if (Array.isArray(params.form)) {
      const formData = new FormData();
      for (const item of params.form) {
        formData.append(item.name, item.value);
      }
      init.body = formData;
    }

    const abortController = new AbortController();
    init.signal = abortController.signal;

    let timeoutHandle: ReturnType<typeof setTimeout> | undefined = setTimeout(
      () => abortController.abort(),
      this.timeout,
    );

    const cleanupTimeout = () => {
      if (!timeoutHandle) return;
      clearTimeout(timeoutHandle);
      timeoutHandle = undefined;
    };

    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`;
    }

    return fetch(url, init)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        const err = new ApiError('NetworkError');
        err.httpStatus = res.status;
        err.httpStatusText = res.statusText;

        return res.text().then((text: string) => {
          try {
            const data = JSON.parse(text) as ProtoError;
            const error = data?.error || (data as ProtoError);
            if (error) {
              if (error.message) err.message = error.message;
              if (error.detail) err.details = error.detail;
            }
          } catch (e) {
            err.message = text;
          }
          throw err;
        });
      })
      .catch((e: Error) => {
        if (isApiError(e)) throw e;
        const err = new ApiError('NetworkError', e.toString());
        throw err;
      })
      .finally(() => {
        cleanupTimeout();
      });
  }
}
