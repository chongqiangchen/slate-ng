import { Component, Inject } from '@angular/core';
import { PLACEHOLDER_CHILDREN_TOKEN } from '../../element/token';
import { BasePlaceholderComponent } from './base-placeholder.component';

@Component({
  selector: 'span[ns-placeholder]',
  template: `
    {{children}}
  `
})
export class PlaceholderComponent extends BasePlaceholderComponent {
  children: any;

  constructor(
    @Inject(PLACEHOLDER_CHILDREN_TOKEN) children: any
  ) {
    super();
    this.children = children;
  }
}
