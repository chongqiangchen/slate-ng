import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from "@angular/core";
import { BaseElementComponent } from "./base-element";
import { KEY_TOKEN } from "./token";
import { Key } from "../../utils/key";
import { NsEditorService } from "../../services/ns-editor.service";
import { NsDepsService } from "../../services/ns-deps.service";

@Component({
  selector: "div[ns-element]",
  templateUrl: "./element.component.html",
  styleUrls: ["./element.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ElementComponent extends BaseElementComponent {
  static type = "default";

  constructor(
    @Inject(KEY_TOKEN) readonly key: Key,
    public deps: NsDepsService,
    public editorService: NsEditorService,
    public elementRef?: ElementRef,
    public cdr?: ChangeDetectorRef,
  ) {
    super(key, deps, editorService, elementRef, cdr);
  }
}
