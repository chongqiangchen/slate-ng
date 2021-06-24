import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import {
  ɵangular_packages_platform_browser_platform_browser_g as EventManagerPlugin
} from '@angular/platform-browser';
import { IS_CHROME_LEGACY, IS_EDGE_LEGACY } from '../../utils/environment';
import { extractBeforeInputEvent } from './extract-event';

// COMPAT: Firefox/Edge Legacy don't support the `beforeinput` event
// Chrome Legacy doesn't support `beforeinput` correctly
export const HAS_BEFORE_INPUT_SUPPORT =
  !IS_CHROME_LEGACY &&
  !IS_EDGE_LEGACY &&
  // globalThis is undefined in older browsers
  typeof globalThis !== 'undefined' &&
  globalThis.InputEvent &&
  // @ts-ignore The `getTargetRanges` property isn't recognized.
  typeof globalThis.InputEvent.prototype.getTargetRanges === 'function';

export const BEFORE_INPUT_EVENTS: { name: string, handler: string, isTriggerBeforeInput: boolean }[] = [
  // { name: 'blur', handler: 'onBlur', isTriggerBeforeInput: true },
  // { name: 'compositionstart', handler: 'onCompositionStart', isTriggerBeforeInput: true },
  { name: 'compositionupdate', handler: null, isTriggerBeforeInput: true },
  // { name: 'compositionend', handler: 'onCompositionEnd', isTriggerBeforeInput: false },
  // { name: 'keydown', handler: 'onKeyDown', isTriggerBeforeInput: true },
  { name: 'keypress', handler: null, isTriggerBeforeInput: true },
  { name: 'keyup', handler: 'onKeyUp', isTriggerBeforeInput: true },
  { name: 'mousedown', handler: 'onMouseDown', isTriggerBeforeInput: true },
  { name: 'textInput', handler: null, isTriggerBeforeInput: true }
  // { name: 'paste', handler: 'onPaste', isTriggerBeforeInput: true }
];

@Injectable()
export class BeforeInputEventPlugin extends EventManagerPlugin {
  readonly EVENT_NAME = 'beforeinput';

  constructor(@Inject(DOCUMENT) doc: any) {
    super(doc);
  }

  // This plugin should come last in the list of plugins, because it accepts all
  // events.
  supports(eventName: string): boolean {
    return eventName === this.EVENT_NAME;
  }

  addEventListener(element: HTMLElement, eventName: string, handler: Function): Function {
    const mulListeners: Array<{ eventName: string, handler: EventListener }> = [];
    if (HAS_BEFORE_INPUT_SUPPORT) {
      element.addEventListener(eventName, handler as EventListener, false);
      mulListeners.push({ eventName, handler: handler as EventListener });
    } else {
      BEFORE_INPUT_EVENTS.forEach(event => {
        const eventHandler: EventListener = (e) => {
          const beforeInputEvent = extractBeforeInputEvent(e.type, null, e, e.target);
          if (beforeInputEvent) {
            handler(beforeInputEvent);
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
