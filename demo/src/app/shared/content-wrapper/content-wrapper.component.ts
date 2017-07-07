import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngmd-content-wrapper',
  templateUrl: './content-wrapper.component.html'
})
export class ContentWrapper {
  @Input()
  public component: string;
}
