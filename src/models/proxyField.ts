import { makeAutoObservable } from 'mobx';

export interface IProxyField {
  readonly value: string;
  readonly error: string | undefined;
  readonly isValid: boolean;
  setError(ident: string): void;
  cleanError(): void;
}

type ProxyFieldGetter = () => string;
export type ProxyFieldValidator = (val: string) => string | undefined;

export interface IProxyFieldConfig {
  getter: ProxyFieldGetter;
  validator?: ProxyFieldValidator;
}

export class ProxyField implements IProxyField {
  private getter: ProxyFieldGetter;
  private validator: ProxyFieldValidator | undefined;

  private _customError: string | undefined = undefined;
  private errorValueSnapshot: string = '';

  constructor(config: IProxyFieldConfig) {
    makeAutoObservable(this);
    this.getter = config.getter;
    if (config.validator) this.validator = config.validator;
  }

  get error(): string | undefined {
    return this.validatorError || this.customError;
  }

  get isValid(): boolean {
    return !this.validatorError && !this.customError;
  }

  private get validatorError(): string | undefined {
    if (this.validator) {
      return this.validator(this.value);
    }

    return '';
  }

  private get customError(): string | undefined {
    if (this._customError && this.errorValueSnapshot === this.value) {
      return this._customError;
    }
    return undefined;
  }

  get value(): string {
    return this.getter();
  }

  setError(ident: string) {
    this._customError = ident;
    this.errorValueSnapshot = this.value;
  }

  cleanError() {
    this._customError = undefined;
    this.errorValueSnapshot = '';
  }
}
