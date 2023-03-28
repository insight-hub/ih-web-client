import { join, login } from './user.codecs';

const handlers = [join, login] as const;

const handlersMap: Map<ApiHandlerTypes, ApiHandlers> = new Map();
for (let h of handlers) {
  handlersMap.set(h.type, h);
}

type DiscriminateUnion<T, K extends keyof T, V extends T[K]> = T extends Record<K, V> ? T : never;

type ApiHandlers = typeof handlers[number];
export type ApiHandlerTypes = ApiHandlers['type'];
export type ApiHandler<Type extends ApiHandlerTypes = ApiHandlerTypes> = DiscriminateUnion<
  ApiHandlers,
  'type',
  Type
>;

export type ApiHandlerParams<T extends ApiHandlerTypes> = Parameters<
  ApiHandler<T>['prepare']
>[0] extends {}
  ? Parameters<ApiHandler<T>['prepare']>[0]
  : undefined;
export type ApiHandlerResponse<T extends ApiHandlerTypes> = ReturnType<ApiHandler<T>['decode']>;

export function getHandler<T extends ApiHandlerTypes>(type: T): ApiHandler<T> {
  return handlersMap.get(type) as ApiHandler<T>;
}
