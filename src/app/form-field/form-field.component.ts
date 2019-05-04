import {AfterViewInit, Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {FaInputComponent} from './fa-input/fa-input.component';

@Component({
  selector: 'app-form-field',
  template: `
    <div class="container">
      <div class="label">
        <ng-content select="label"></ng-content>
      </div>
      <div class="data">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit, AfterViewInit {

  constructor() { }
  @ViewChild(FaInputComponent) faInputComponent: FaInputComponent;


  @HostListener('click')
  test() {
    console.log('clicked');
  }
  ngOnInit() {

  }

  ngAfterViewInit(): void {
    const event = new CustomEvent('test', {detail: {id: 1, data: 'nothing'}});
    document.querySelector('app-fa-input').dispatchEvent(event);
  }

}
