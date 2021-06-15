import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, OnInit } from '@angular/core';
import { BaseElementComponent, Key, KEY_TOKEN, NsDepsService, NsEditorService } from 'slate-ng-view';


@Component({
  selector: 'table[custom-table]',
  template: `
    <tbody nsElementAttrs>
      <ng-container *ngFor="let portal of portals; trackBy: trackBy">
        <ng-template [cdkPortalOutlet]="portal"></ng-template>
      </ng-container>
    </tbody>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomTable extends BaseElementComponent implements OnInit {
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

@Component({
  selector: 'tr[custom-table-row]',
  template: `
    <ng-container *ngFor="let portal of portals; trackBy: trackBy">
      <ng-template [cdkPortalOutlet]="portal"></ng-template>
    </ng-container>

  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomTableRow extends BaseElementComponent implements OnInit {
  static type = 'table-row';

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
    this.init();
    this.watchDeps();
  }
}

@Component({
  selector: 'td[custom-table-cell]',
  template: `
    <ng-container *ngFor="let portal of portals; trackBy: trackBy">
      <ng-template [cdkPortalOutlet]="portal"></ng-template>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomTableCell extends BaseElementComponent implements OnInit {
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
    this.init();
    this.watchDeps();
  }
}

export const CustomTableElements = [CustomTable, CustomTableRow, CustomTableCell];
