import { Component, HostBinding, Inject, OnInit } from "@angular/core";
import { BaseLeafComponent, LEAF_CHILD_PORTAL_TOKEN, LEAF_TOKEN } from "../../../../../../slate-ng/src";
import { ComponentPortal } from "@angular/cdk/portal";

@Component({
  selector: 'span[app-custom-leaf]',
  template: `
    <ng-template [cdkPortalOutlet]="leafChild"></ng-template>
  `,
  styles: [`
    :host {
      font-family: monospace;
      background: hsla(0, 0%, 100%, .5);
    }
  `]
})
export class LeafComponent extends BaseLeafComponent implements OnInit {
  static type = "leaf";

  @HostBinding('style.color')
  get color() {
    const leaf = this.leaf;
    if (leaf?.comment) {
      return 'slategray';
    }

    if (leaf?.operator || leaf.url) {
      return '#9a6e3a';
    }

    if (leaf?.keyword) {
      return '#07a';
    }

    if (leaf?.variable || leaf?.regex) {
      return '#e90';
    }

    if (leaf.number ||
      leaf.boolean ||
      leaf.tag ||
      leaf.constant ||
      leaf.symbol ||
      leaf['attr-name'] ||
      leaf.selector) {
      return '#905';
    }

    if (leaf.punctuation) {
      return '#999'
    }

    if (leaf.string || leaf.char) {
      return '#690'
    }

    if (leaf.function || leaf['class-name']) {
      return '#dd4a68';
    }
  };

  constructor(
    @Inject(LEAF_CHILD_PORTAL_TOKEN) readonly leafChild: ComponentPortal<any>,
    @Inject(LEAF_TOKEN) readonly leaf: any
  ) {
    super()
  }

  ngOnInit(): void {
  }


}
