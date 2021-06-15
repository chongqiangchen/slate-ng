import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {
  @Input() className: string;
  @Input() reversed: boolean;
  @Input() active: boolean;

  @Output() onMouseDown = new EventEmitter();

  get color() {
    return this.reversed
      ? this.active
        ? 'white'
        : '#aaa'
      : this.active
        ? 'black'
        : '#ccc'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
