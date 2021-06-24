import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {BaseElementComponent, Key, KEY_TOKEN, NsDepsService, NsEditorService} from 'slate-ng';

@Component({
  selector: 'td[slate-ng-element-table-cell]',
  template: `
    <ng-container *ngFor="let portal of portals; trackBy: trackBy">
      <ng-template [cdkPortalOutlet]="portal"></ng-template>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class SlateNgElementTableCell extends BaseElementComponent implements OnInit {
  static type = 'table-cell';

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
    this.watchDeps();
  }
}
