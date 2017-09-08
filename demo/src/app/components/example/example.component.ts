import { Component } from '@angular/core';
import { DEMO_SNIPPETS } from './demos';
@Component({
  selector: 'ngmd-example',
  template: `
  <ngmd-component-wrapper component="Example">
      <ngmd-api-docs directive="NgmExample"></ngmd-api-docs>
      <ngmd-example-box demoTitle="Example" [snippets]="snippets" component="example" demo="static">
      <ngmd-example-static></ngmd-example-static>
    </ngmd-example-box>
  </ngmd-component-wrapper>
  `
})
export class NgmdExample {
  snippets = DEMO_SNIPPETS;
  
}
// <ngmd-api - docs directive= "NgmExample" > </ngmd-api-docs>
