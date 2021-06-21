import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { BaseElementComponent, Key, KEY_TOKEN, NsDepsService, NsEditorService } from 'slate-ng';


@Component({
  selector: 'h1[huge-document-h1]',
  template: `
    <ng-container *ngFor="let portal of portals; trackBy: trackBy">
      <ng-template [cdkPortalOutlet]="portal"></ng-template>
    </ng-container>
  `
})
export class HugeDocumentH1 extends BaseElementComponent {
  static type = 'heading';

  constructor(
    @Inject(KEY_TOKEN) readonly key: Key,
    public deps: NsDepsService,
    public editorService: NsEditorService,
    public elementRef: ElementRef,
  ) {
    super(key, deps, editorService, elementRef);
  }
}
