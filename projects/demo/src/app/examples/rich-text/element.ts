import {ChangeDetectionStrategy, Component, ElementRef, Inject} from '@angular/core';
import {BaseElementComponent, Key, KEY_TOKEN, NsDepsService, NsEditorService} from 'slate-ng';


@Component({
  selector: 'blockquote[block-quote]',
  template: `
    <ng-container *ngFor="let portal of portals; trackBy: trackBy">
      <ng-template [cdkPortalOutlet]="portal"></ng-template>
    </ng-container>
  `
})
export class BlockQuoteComponent extends BaseElementComponent {
  static type = 'block-quote';

  constructor(
    @Inject(KEY_TOKEN) readonly key: Key,
    public deps: NsDepsService,
    public editorService: NsEditorService,
    public elementRef: ElementRef,
  ) {
    super(key, deps, editorService, elementRef);
  }
}

@Component({
  selector: 'ul[bulleted-list]',
  template: `
    <nz-alert nzType="success" [nzMessage]="message"></nz-alert>
    <ng-template #message>
      <ng-container *ngFor="let portal of portals; trackBy: trackBy">
        <ng-template [cdkPortalOutlet]="portal"></ng-template>
      </ng-container>
    </ng-template>
  `
})
export class BulletedListComponent extends BaseElementComponent {
  static type = 'bulleted-list';

  constructor(
    @Inject(KEY_TOKEN) readonly key: Key,
    public deps: NsDepsService,
    public editorService: NsEditorService,
    public elementRef: ElementRef,
  ) {
    super(key, deps, editorService, elementRef);
  }
}

@Component({
  selector: 'h1[heading-one]',
  template: `
    <ng-container *ngFor="let portal of portals; trackBy: trackBy">
      <ng-template [cdkPortalOutlet]="portal"></ng-template>
    </ng-container>
  `
})
export class HeadingOneComponent extends BaseElementComponent {
  static type = 'heading-one';

  constructor(
    @Inject(KEY_TOKEN) readonly key: Key,
    public deps: NsDepsService,
    public editorService: NsEditorService,
    public elementRef: ElementRef,
  ) {
    super(key, deps, editorService, elementRef);
  }
}

@Component({
  selector: 'h2[heading-two]',
  template: `
    <ng-container *ngFor="let portal of portals; trackBy: trackBy">
      <ng-template [cdkPortalOutlet]="portal"></ng-template>
    </ng-container>
  `
})
export class HeadingTwoComponent extends BaseElementComponent {
  static type = 'heading-two';

  constructor(
    @Inject(KEY_TOKEN) readonly key: Key,
    public deps: NsDepsService,
    public editorService: NsEditorService,
    public elementRef: ElementRef,
  ) {
    super(key, deps, editorService, elementRef);
  }
}

@Component({
  selector: 'h3[heading-two]',
  template: `
    <ng-container *ngFor="let portal of portals; trackBy: trackBy">
      <ng-template [cdkPortalOutlet]="portal"></ng-template>
    </ng-container>
  `
})
export class HeadingThreeComponent extends BaseElementComponent {
  static type = 'heading-three';

  constructor(
    @Inject(KEY_TOKEN) readonly key: Key,
    public deps: NsDepsService,
    public editorService: NsEditorService,
    public elementRef: ElementRef,
  ) {
    super(key, deps, editorService, elementRef);
  }
}

@Component({
  selector: 'h4[heading-two]',
  template: `
    <ng-container *ngFor="let portal of portals; trackBy: trackBy">
      <ng-template [cdkPortalOutlet]="portal"></ng-template>
    </ng-container>
  `
})
export class HeadingFourComponent extends BaseElementComponent {
  static type = 'heading-four';

  constructor(
    @Inject(KEY_TOKEN) readonly key: Key,
    public deps: NsDepsService,
    public editorService: NsEditorService,
    public elementRef: ElementRef,
  ) {
    super(key, deps, editorService, elementRef);
  }
}

@Component({
  selector: 'h5[heading-two]',
  template: `
    <ng-container *ngFor="let portal of portals; trackBy: trackBy">
      <ng-template [cdkPortalOutlet]="portal"></ng-template>
    </ng-container>
  `
})
export class HeadingFiveComponent extends BaseElementComponent {
  static type = 'heading-five';

  constructor(
    @Inject(KEY_TOKEN) readonly key: Key,
    public deps: NsDepsService,
    public editorService: NsEditorService,
    public elementRef: ElementRef,
  ) {
    super(key, deps, editorService, elementRef);
  }
}

@Component({
  selector: 'h6[heading-two]',
  template: `
    <ng-container *ngFor="let portal of portals; trackBy: trackBy">
      <ng-template [cdkPortalOutlet]="portal"></ng-template>
    </ng-container>
  `
})
export class HeadingSixComponent extends BaseElementComponent {
  static type = 'heading-six';

  constructor(
    @Inject(KEY_TOKEN) readonly key: Key,
    public deps: NsDepsService,
    public editorService: NsEditorService,
    public elementRef: ElementRef,
  ) {
    super(key, deps, editorService, elementRef);
  }
}


@Component({
  selector: 'li[list-item]',
  template: `
    <ng-container *ngFor="let portal of portals; trackBy: trackBy">
      <ng-template [cdkPortalOutlet]="portal"></ng-template>
    </ng-container>
  `
})
export class ListItemComponent extends BaseElementComponent {
  static type = 'list-item';

  constructor(
    @Inject(KEY_TOKEN) readonly key: Key,
    public deps: NsDepsService,
    public editorService: NsEditorService,
    public elementRef: ElementRef,
  ) {
    super(key, deps, editorService, elementRef);
  }
}


@Component({
  selector: 'ol[numbered-list]',
  template: `
    <ng-container *ngFor="let portal of portals; trackBy: trackBy">
      <ng-template [cdkPortalOutlet]="portal"></ng-template>
    </ng-container>
  `
})
export class NumberedListComponent extends BaseElementComponent {
  static type = 'numbered-list';
  useHostBinding = false;

  constructor(
    @Inject(KEY_TOKEN) readonly key: Key,
    public deps: NsDepsService,
    public editorService: NsEditorService,
    public elementRef: ElementRef,
  ) {
    super(key, deps, editorService, elementRef);
  }
}

@Component({
  selector: 'p[default-element]',
  template: `
    <ng-container *ngFor="let portal of portals; trackBy: trackBy">
      <ng-template [cdkPortalOutlet]="portal"></ng-template>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultComponent extends BaseElementComponent {
  static type = 'paragraph';

  constructor(
    @Inject(KEY_TOKEN) readonly key: Key,
    public deps: NsDepsService,
    public editorService: NsEditorService,
    public elementRef: ElementRef,
  ) {
    super(key, deps, editorService, elementRef);
  }
}


export const CustomComponents = [
  NumberedListComponent,
  ListItemComponent,
  HeadingOneComponent,
  HeadingTwoComponent,
  HeadingThreeComponent,
  HeadingFourComponent,
  HeadingFiveComponent,
  HeadingSixComponent,
  BulletedListComponent,
  BlockQuoteComponent,
  DefaultComponent
];
