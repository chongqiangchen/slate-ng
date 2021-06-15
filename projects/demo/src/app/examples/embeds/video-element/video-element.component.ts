import { ChangeDetectorRef, Component, ElementRef, Inject, OnInit } from '@angular/core';
import { AngularEditor, BaseElementComponent, NsEditorService, Key, KEY_TOKEN, NsDepsService } from 'slate-ng-view';
import { Element as SlateElement, Transforms } from 'slate';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'div[app-video-element]',
  templateUrl: './video-element.component.html',
  styleUrls: ['./video-element.component.less']
})
export class VideoElementComponent extends BaseElementComponent {
  static type = 'video';

  get url() {
    return this.cNode.url;
  }

  constructor(
    @Inject(KEY_TOKEN) readonly key: Key,
    public deps: NsDepsService,
    public editorService: NsEditorService,
    private sanitizer: DomSanitizer,
    public elementRef?: ElementRef,
  ) {
    super(key, deps, editorService, elementRef);
  }

  handleUrlChange(val: any) {
    const path = AngularEditor.findPath(this.editorService.editor, this.cNode);
    const newProperties: any = {
      url: val,
    };
    Transforms.setNodes(this.editorService.editor, newProperties, { at: path });
  }
}
