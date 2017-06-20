import { Component } from '@angular/core';
import { DEMO_SNIPPETS } from './demos';

@Component({
  selector: 'ngmd-example',
  template: `
        <ngm-example></ngm-example>
  `
})
export class NgmdExample {
  snippets = DEMO_SNIPPETS;
}
