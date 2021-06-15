import { Injectable, Injector, StaticProvider, ViewContainerRef } from "@angular/core";
import { ObjectSet } from "../utils/object-set";
import { ComponentPortal, ComponentType } from "@angular/cdk/portal";

export interface CustomElement {
  type: string;
  comp: ComponentType<any>
}

@Injectable()
export class RegistryNsElement {
  elements = new ObjectSet<CustomElement>('type');

  constructor() {
  }

  add(components: any[]) {
    components.forEach(comp => {
      const content: CustomElement = {} as CustomElement;
      content.type = comp.type;
      content.comp = comp;
      this.elements.add(content);
    })
  }

  get(type: string): CustomElement {
    return this.elements.get(type);
  }

  getComponentPortal(type: string, providers: StaticProvider[], parentInjector: Injector, defaultComp?: ComponentType<any>) {
    const component = this.get(type)?.comp || defaultComp;
    if (!component) {
      throw Error(`Not found ${type} Component`);
    }
    return new ComponentPortal<any>(component, null, this.getInjector(providers, parentInjector));
  }

  getInjector(providers: StaticProvider[], parentInjector: Injector): Injector {
    return Injector.create(providers, parentInjector);
  }
}
