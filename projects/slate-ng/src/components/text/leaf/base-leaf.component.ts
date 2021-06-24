import { Directive, HostBinding } from '@angular/core';

@Directive()
export abstract class BaseLeafComponent {
  @HostBinding('attr.data-slate-leaf') dataSlateLeaf = true;
}
