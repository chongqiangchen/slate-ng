import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Inject,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {
  AngularEditor,
  BaseElementComponent,
  IS_SELECTION_TOKEN,
  Key,
  KEY_TOKEN,
  NsDepsService,
  NsEditorService
} from "slate-ng";

@Component({
  selector: 'div[app-image-element]',
  template: `
    <div [attr.contentEditable]="false">
      <img
        [src]="cNode.url"
        [style]="{
            display: 'block',
            'max-width': '100%',
            'max-height': '20em',
            'box-shadow': selected && focused ? '0 0 0 3px #B4D5FF' : 'none'
        }"
      />
    </div>
    <ns-portal-entry [portals]="portals"></ns-portal-entry>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ImageElementComponent extends BaseElementComponent implements OnInit {
  static type = 'image';

  get selected() {
    return this.injector.get(IS_SELECTION_TOKEN);
  }

  get focused() {
    return AngularEditor.isFocused(this.editorService.editor);
  }

  constructor(
    @Inject(KEY_TOKEN) readonly key: Key,
    public deps: NsDepsService,
    public editorService: NsEditorService,
    public elementRef?: ElementRef,
  ) {
    super(key, deps, editorService, elementRef);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.watchDeps();
  }

}
