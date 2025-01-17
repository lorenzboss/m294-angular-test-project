import { Component } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.scss',
})
export class Page1Component {
  parentInputData = '';
  childInputData: any;

  setData() {
    this.parentInputData = 'Parent button clicked!';
  }

  receiveData(data: string) {
    this.childInputData = data;
  }
}
