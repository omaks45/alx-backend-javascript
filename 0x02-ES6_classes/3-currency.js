export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(item) {
    this._code = item;
  }

  get name() {
    return this._name;
  }

  set name(elem) {
    this._name = elem;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
