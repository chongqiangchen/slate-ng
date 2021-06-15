import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {
  @Input() className: string;
  @Input() customStyle: any;
  _classMap = {};

  constructor() { }

  ngOnInit(): void {
    this._classMap = {
      [this.className]: true,
    }
  }

}
