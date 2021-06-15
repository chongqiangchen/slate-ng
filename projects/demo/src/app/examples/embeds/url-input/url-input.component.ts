import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-url-input',
  templateUrl: './url-input.component.html',
  styleUrls: ['./url-input.component.less']
})
export class UrlInputComponent implements OnInit {
  @Input() url: string;
  @Output() urlChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleChange($event: any) {
    this.urlChange.emit($event);
  }
}
