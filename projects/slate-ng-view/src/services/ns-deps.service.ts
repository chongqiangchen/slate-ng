import { Injectable, Injector } from '@angular/core';
import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable()
export class NsDepsService {
  deps = new WeakMap();
  private change$$ = new Subject();

  watch(key) {
    return this.change$$.asObservable().pipe(filter(k => k === key));
  }

  set(key, injector) {
    this.deps.set(key, {
      needUpdate: true,
      injector
    });
    this.change$$.next(key);
  }

  get(key) {
    return {
      ...this.deps.get(key),
      dispose: () => {
        this.deps[key].needUpdate = false;
      }
    };
  }
}
