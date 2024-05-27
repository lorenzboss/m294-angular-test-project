import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  @Input()
  parentText = '';

  @Output()
  childEvent = new EventEmitter<string>();

  setData() {
    this.childEvent.emit('Child button clicked!');
  }
}
