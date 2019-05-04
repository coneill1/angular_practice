import {Component, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-fa-input',
  template: `
    <i [ngClass]="classes"></i>
    <ng-content></ng-content>
  `,
  styleUrls: ['./fa-input.component.scss']
})
export class FaInputComponent implements OnInit {

  @Input() icon: string;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('test')
  custom($event) {
    console.log($event.detail);
  }

  get classes() {
    const cssClasses = {
      fa: true
    };

    cssClasses[`fa-${this.icon}`] = true;

    return cssClasses;
  }

}
