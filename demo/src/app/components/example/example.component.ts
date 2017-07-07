import { Component } from '@angular/core';
import { DEMO_SNIPPETS } from './demos';

@Component({
  selector: 'ngmd-example',
  template: `
  <ngmd-content-wrapper component="Example">
      <ngmd-example-box demoTitle="Example" [snippets]="snippets" component="accordion" demo="toggle">
      <ngm-example></ngm-example>
    </ngmd-example-box>
  </ngmd-content-wrapper>
  `
})
export class NgmdExample {
  snippets = DEMO_SNIPPETS;
}
// <ngmd-api - docs directive= "NgmExample" > </ngmd-api-docs>
