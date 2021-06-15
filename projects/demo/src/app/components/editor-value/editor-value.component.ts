import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'app-editor-value',
  templateUrl: './editor-value.component.html',
  styleUrls: ['./editor-value.component.less']
})
export class EditorValueComponent implements OnInit {
  @Input() className: string;
  @Input() value: any;

  get textLines() {
    return this.value.document.nodes
      .map(node => node.text)
      .toArray()
      .join('\n');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
