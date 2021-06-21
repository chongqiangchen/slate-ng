import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";
import {
  ɵangular_packages_platform_browser_platform_browser_g as EventManagerPlugin
} from "@angular/platform-browser";
import { canUseCompositionEvent, extractCompositionEvent } from "../before-input/extract-event";

export const COMPOSITION_EVENTS: { name: string }[] = [
  { name: "focusout" },
  { name: "keydown" },
  { name: "keypress" },
  { name: "keyup" },
  { name: "mousedown" }
];


@Injectable()
export class CompositionEventPlugin extends EventManagerPlugin {
  readonly COMPOSITION_START = "composition_start";
  readonly COMPOSITION_UPDATE = "composition_update";
  readonly COMPOSITION_END = "composition_end";

  constructor(@Inject(DOCUMENT) doc: any) {
    super(doc);
  }

  // This plugin should come last in the list of plugins, because it accepts all
  // events.
  supports(eventName: string): boolean {
    return eventName === this.COMPOSITION_START
      || eventName === this.COMPOSITION_UPDATE
      || eventName === this.COMPOSITION_END;
  }


  addEventListener(element: HTMLElement, eventName: string, handler: Function): Function {
    const mulListeners: Array<{ eventName: string, handler: EventListener }> = [];
    if (canUseCompositionEvent) {
      element.addEventListener(eventName, handler as EventListener, false);
      mulListeners.push({ eventName, handler: handler as EventListener });
    } else {
      COMPOSITION_EVENTS.forEach(event => {
        const eventHandler: EventListener = (e) => {
          const compositionEvent = extractCompositionEvent(e.type, null, e, e.target);
          if (compositionEvent) {
            handler(compositionEvent);
          }
        };
        element.addEventListener(event.name, eventHandler, false);
        mulListeners.push({ eventName: event.name, handler: eventHandler });
      });
    }
    return () => {
      mulListeners.forEach(listener => {
        this.removeEventListener(element, listener.eventName, listener.handler);
      });
    };
  }

  removeEventListener(target: any, eventName: string, callback: Function): void {
    return target.removeEventListener(eventName, callback as EventListener);
  }
}
