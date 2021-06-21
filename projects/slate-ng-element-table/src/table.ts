import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, OnInit} from '@angular/core';
import {BaseElementComponent, Key, KEY_TOKEN, NsDepsService, NsEditorService} from 'slate-ng';


@Component({
  selector: 'table[slate-ng-element-table]',
  template: `
    <tbody nsElementAttrs>
      <ng-container *ngFor="let portal of portals; trackBy: trackBy">
        <ng-template [cdkPortalOutlet]="portal"></ng-template>
      </ng-container>
    </tbody>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlateNgElementTable extends BaseElementComponent implements OnInit {
  static type = 'table';

  constructor(
    @Inject(KEY_TOKEN) readonly key: Key,
    public deps: NsDepsService,
    public editorService: NsEditorService,
    public elementRef: ElementRef,
    public cdr: ChangeDetectorRef
  ) {
    super(key, deps, editorService, elementRef, cdr);
  }

  ngOnInit() {
    this.init({ useHostAttrs: false });
    this.watchDeps();
  }
}
