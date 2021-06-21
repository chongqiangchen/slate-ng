import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { LEAF_CHILD_PORTAL_TOKEN } from '../../element/token';
import { ComponentPortal } from '@angular/cdk/portal';
import { BaseLeafComponent } from './base-leaf.component';

@Component({
  selector: 'span[ns-leaf]',
  templateUrl: './leaf.component.html',
  styleUrls: ['./leaf.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LeafComponent extends BaseLeafComponent {
  constructor(
    @Inject(LEAF_CHILD_PORTAL_TOKEN) readonly leafChild: ComponentPortal<any>
  ) {
    super();
  }
}
