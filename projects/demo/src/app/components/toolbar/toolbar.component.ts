import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.less']
})
export class ToolbarComponent implements OnInit {
  @Input() className: string;

  constructor() { }

  ngOnInit(): void {
  }

}
