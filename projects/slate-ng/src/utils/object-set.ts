
export class ObjectSet<T extends object> {
  private store: object = {};
  private readonly keyName: string = '';

  constructor(keyName: string) {
    this.keyName = keyName;
    return this;
  }

  gets(): Array<T> {
    return Object.values(this.store);
  }


  get(valueKey: string): T {
    return this.store[valueKey];
  }

  add(value: T) {
    this.store[value[this.keyName]] = value;
  }

  remove(value: T) {
    delete this.store[value[this.keyName]];
  }

  has(value: T) {
    return !!this.store[value[this.keyName]];
  }

  forEach(callback: (item: T, index: number, self: ObjectSet<T>) => {}) {
    for(let i = 0; i < this.gets().length; i++) {
      callback(this.gets()[i], i, this);
    }
  }
}
