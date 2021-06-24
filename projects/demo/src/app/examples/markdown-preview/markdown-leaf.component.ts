import { Component, HostBinding, Inject, OnInit } from "@angular/core";
import { ComponentPortal } from "@angular/cdk/portal";
import { BaseLeafComponent, LEAF_CHILD_PORTAL_TOKEN, LEAF_TOKEN } from "slate-ng";


@Component({
  selector: 'span[app-custom-leaf]',
  template: `
    <ng-template [cdkPortalOutlet]="leafChild"></ng-template>
  `
})
export class MarkdownLeafComponent extends BaseLeafComponent implements OnInit {
  static type = "leaf";

  @HostBinding('style')
  get customStyle() {
    let style = `
      font-weight: ${this.leaf.bold && 'bold'};
      font-style: ${this.leaf.italic && 'italic'};
      text-decoration: ${this.leaf.underlined && 'underline'};
    `;

    if (this.leaf.title) {
      style += `
         display: inline-block;
         font-weight: bold;
         font-size: 20px;
         margin: 20px 0 10px 0;
      `
    }

    if (this.leaf.list) {
      style += `
         padding-left: 10px;
            font-size: 20px;
            line-height: 10px;
      `
    }

    if (this.leaf.hr) {
      style += `
        display: block;
            text-align: center;
            border-bottom: 2px solid #ddd;
      `
    }

    if (this.leaf.blockquote) {
      style += `
      display: inline-block;
            border-left: 2px solid #ddd;
            padding-left: 10px;
            color: #aaa;
            font-style: italic;
      `
    }

    if (this.leaf.code) {
      style += `
       font-family: monospace;
            background-color: #eee;
            padding: 3px;
      `
    }

    return style;
  }

  constructor(
    @Inject(LEAF_CHILD_PORTAL_TOKEN) readonly leafChild: ComponentPortal<any>,
    @Inject(LEAF_TOKEN) readonly leaf: any
  ) {
    super()
  }

  ngOnInit(): void {

  }

}
