export class ApiError extends Error {
  code: string;
  httpStatus?: number;
  httpStatusText?: string;
  details?: Record<string, string> | Record<string, string[]> | string[];

  get isTemporary(): boolean {
    if (this.code !== 'NetworkError') return false;
    return !this.httpStatus || this.httpStatus >= 500;
  }

  constructor(code: string, message?: string) {
    super(message);
    // restore prototype chain broken by Error constructor
    // Object.setPrototypeOf(this, new.target.prototype);
    this.code = code;
  }
}

export function isApiError(e: any): e is ApiError {
  return e instanceof ApiError;
}

export function isTmpError(e: any): boolean {
  return isApiError(e) ? e.isTemporary : false;
}
