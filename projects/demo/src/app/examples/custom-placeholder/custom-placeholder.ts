import { Component, Inject, Injector } from '@angular/core';
import { BasePlaceholderComponent, PLACEHOLDER_CHILDREN_TOKEN } from 'slate-ng-view';


@Component(
  {
    // tslint:disable-next-line:component-selector
    selector: 'div[custom-placeholder]',
    template: `
      <p>{{children}}</p>
      <pre>Use the renderPlaceholder prop to customize rendering of the placeholder</pre>
    `
  }
)
export class CustomPlaceholder extends BasePlaceholderComponent {
  static type = 'placeholder';

  constructor(
    @Inject(PLACEHOLDER_CHILDREN_TOKEN) readonly children: any
  ) {
    super();
  }
}
