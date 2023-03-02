export interface IProxyField {
  readonly value: string;
  setValue(val: string): void;
  isValid: boolean;
}

export class ProxyField implements IProxyField {
  private getter;
  private setter;
  private validator;

  constructor({
    getter,
    setter,
    validator,
  }: {
    getter: () => string;
    setter: (val: string) => void;
    validator?: (val: string) => boolen;
  }) {
    this.getter = getter;
    this.setter = setter;
    this.validator = validator;
  }

  get value() {
    return this.getter();
  }

  get isValid() {
    return this.validator(this.getter());
  }

  setValue(val: string) {
    this.setter(val);
  }
}
