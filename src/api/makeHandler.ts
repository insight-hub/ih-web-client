export type Request = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  path: string;
  headers?: Record<string, string>;
  form?: FormDataEntry[];
};

export type FormDataEntry = {
  name: string;
  value: string;
};

type RequestFactory<Params> = (req: Params) => Request;
type ResponseFactory<Data> = (res: any) => Data;

type RequestHandler<RequestParams, ResponseData, T extends string = string> = {
  type: T;
  prepare: RequestFactory<RequestParams>;
  decode: ResponseFactory<ResponseData>;
};

export function makeHandler<Params, Data, T extends string>(
  type: T,
  prepare: RequestFactory<Params>,
  decode: ResponseFactory<Data>,
): RequestHandler<Params, Data, T> {
  return {
    type,
    prepare,
    decode,
  };
}
