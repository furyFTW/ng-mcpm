import { Component } from '@angular/core';
import { DEMO_SNIPPETS } from './demos';
console.log(DEMO_SNIPPETS);
@Component({
  selector: 'ngmd-example',
  template: `
  <ngmd-component-wrapper component="Example">
      <ngmd-api-docs directive="NgmExample"></ngmd-api-docs>
      <ngmd-example-box demoTitle="Example" [snippets]="snippets" component="example" demo="static">
      <ngm-example></ngm-example>
    </ngmd-example-box>
  </ngmd-component-wrapper>
  `
})
export class NgmdExample {
  snippets = DEMO_SNIPPETS;
  
}
// <ngmd-api - docs directive= "NgmExample" > </ngmd-api-docs>
