import { Directive, HostBinding } from "@angular/core";

@Directive({
  selector: '[nsPlaceholderAttrs]'
})
export class PlaceholderAttrsDirective {
  @HostBinding('attr.data-slate-placeholder') dataSlatePlaceholder = true;
  @HostBinding('attr.contentEditable') contentEditable = false;
  @HostBinding('style.display') styleDisplay = 'block';
  @HostBinding('style.pointer-events') stylePointerEvent = 'none';
  @HostBinding('style.user-select') styleUserSelect = 'none';
  @HostBinding('style.text-decoration') styleTextDecoration = 'none';
  @HostBinding('style.position') stylePosition = 'absolute';
  @HostBinding('style.width') styleWidth = '100%';
  @HostBinding('style.max-width') styleMaxWidth = '100%';
  @HostBinding('style.opacity') styleOpacity = 0.333;
  @HostBinding('style.top') styleTop = 0;

  constructor() { }
}
