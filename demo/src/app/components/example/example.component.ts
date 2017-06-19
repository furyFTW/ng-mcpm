import { Component } from '@angular/core';
import { DEMO_SNIPPETS } from './demos';

@Component({
    selector: 'ngbd-accordion',
    template: `
    <ngbd-content-wrapper component="Accordion">
      <ngbd-api-docs directive="NgbExample"></ngbd-api-docs>
      <ngbd-example-box demoTitle="One open panel at a time" [snippets]="snippets" component="example" demo="static">
        <ngbd-accordion-static></ngbd-accordion-static>
      </ngbd-example-box>
    </ngbd-content-wrapper>
  `
})
export class NgmdExample {
    snippets = DEMO_SNIPPETS;
}
