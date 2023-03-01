import { ApiHandlerParams, ApiHandlerResponse, ApiHandlerTypes, getHandler } from './calls';
import { Request } from './makeHandler';

interface ApiConfig {
  base: string;
}

export class Api {
  private base: string;

  constructor(config: ApiConfig) {
    this.base = config.base;
  }

  call<T extends ApiHandlerTypes>(
    type: T,
    params: ApiHandlerParams<T>,
  ): Promise<ApiHandlerResponse<T>>;
  call(type: any, params: any): any {
    const h = getHandler(type);
    const request = h.prepare(params);

    return this.makeRequestInternal({
      ...request,
      headers: {
        // aditional headers like device signature
        ...request.headers,
      },
    });
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

    return fetch(url, init).then((res) => {
      if (res.ok) {
        return res.json();
      }

      // TODO handle api error & abortcontroller
      return;
    });
  }
}
