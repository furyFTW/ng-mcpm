import {Component, Input} from '@angular/core';

@Component({
  selector: 'ngmd-page-wrapper',
  templateUrl: './page-wrapper.component.html'
})
export class PageWrapper {
  @Input()
  public title: string;
}
