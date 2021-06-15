import { Directive, HostBinding } from "@angular/core";

@Directive({
  selector: '[nsLeafAttrs]'
})
export class LeafAttrsDirective {
  @HostBinding('attr.data-slate-leaf') dataSlateLeaf = true;

  constructor() { }

}
