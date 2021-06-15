import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Inject,
  Injector,
  OnDestroy,
  OnInit,
  ViewEncapsulation
} from "@angular/core";
import { PLACEHOLDER_SYMBOL } from "../../../utils/weak-maps";
import {
  CURRENT_NODE_TOKEN,
  IS_LAST_TOKEN,
  LEAF_TOKEN,
  PARENT_NODE_TOKEN,
  PLACEHOLDER_CHILDREN_TOKEN
} from "../../element/token";
import { Text } from "slate";
import { PlaceholderComponent } from "../placeholder/placeholder.component";
import { RegistryNsElement } from "../../../services/registry-ns-element.service";

@Component({
  selector: "ns-leaf-child",
  templateUrl: "./leaf-child.component.html",
  styleUrls: ["./leaf-child.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class LeafChildComponent implements OnInit, AfterViewInit, OnDestroy {
  editorEl: HTMLElement;
  placeholderPortal = null;

  constructor(
    @Inject(IS_LAST_TOKEN) readonly isLast: boolean,
    @Inject(CURRENT_NODE_TOKEN) readonly cNode: any,
    @Inject(PARENT_NODE_TOKEN) readonly pNode: any,
    @Inject(LEAF_TOKEN) readonly leaf: Text,
    private customService: RegistryNsElement,
    private injector: Injector
  ) {
  }

  get hasPlaceholder() {
    return this.leaf[PLACEHOLDER_SYMBOL];
  }

  ngOnInit() {
    if (this.hasPlaceholder) {
      this.placeholderPortal =
        this.customService.getComponentPortal("placeholder", [{
          provide: PLACEHOLDER_CHILDREN_TOKEN,
          useValue: (this.leaf as any).placeholder
        }], this.injector, PlaceholderComponent);
    }
  }

  ngAfterViewInit() {
    // todo: 可以重构，使用editorService
    const editorEl = this.editorEl = document.querySelector<HTMLDivElement>(
      "[data-slate-ng-editor=\"true\"]"
    );

    const placeholderEl = document.querySelector<HTMLElement>("[data-slate-placeholder=\"true\"]");

    if (!placeholderEl || !editorEl) {
      return;
    }

    editorEl.style.minHeight = `${placeholderEl.clientHeight}px`;
  }

  ngOnDestroy() {
    this.editorEl && (this.editorEl.style.minHeight = "auto");
  }
}
