import {
  Component,
  Input, Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.less']
})
export class IconButtonComponent {
  @Input() icon: any;
  @Input() isActive = false;
  @Output() onMouseDown = new EventEmitter();

  handle($event: any) {
    $event.preventDefault();
    this.onMouseDown.emit();
  }
}
