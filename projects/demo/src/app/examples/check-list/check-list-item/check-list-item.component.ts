import {
  AfterContentChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  OnInit
} from "@angular/core";
import { AngularEditor, BaseElementComponent, NsEditorService, Key, KEY_TOKEN, NsDepsService } from "slate-ng";
import { Element as SlateElement, Transforms } from "slate";

@Component({
  selector: "div[check-list-item]",
  templateUrl: "./check-list-item.component.html",
  styleUrls: ["./check-list-item.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckListItemComponent extends BaseElementComponent implements OnInit {
  static type = 'check-list-item';

  constructor(
    @Inject(KEY_TOKEN) readonly key: Key,
    public deps: NsDepsService,
    public editorService: NsEditorService,
    public elementRef: ElementRef,
    public cdr: ChangeDetectorRef,
  ) {
    super(key, deps, editorService, elementRef, cdr);
  }

  ngOnInit(): void {
    this.init();
    this.watchDeps();
  }

  handleCheckboxChange($event: any) {
    const path = AngularEditor.findPath(this.editorService.editor, this.cNode);
    const newProperties: Partial<SlateElement & {checked: boolean}> = {
      checked: $event.target?.checked
    };
    Transforms.setNodes(this.editorService.editor, newProperties, { at: path });
  }
}
