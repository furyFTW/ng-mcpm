import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import docs from '../../../../api-docs';
import { ClassDesc, MethodDesc, signature } from './api-docs.model';

/**
 * Displays the API docs of a class, which is not a directive.
 *
 * For Config services, use NgbdApiDocsConfig instead.
 */
@Component({
  selector: 'ngmd-api-docs-class',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './api-docs-class.component.html',
  styles: [`
    .label-cell {
      width: 25%;
    }
    .content-cell {
      width: 75%;
    }
    `
  ]
})
export class NgmdApiDocsClass {
  apiDocs: ClassDesc;

  constructor() { }

  @Input() set type(typeName: string) {
    console.log(docs, typeName);
    this.apiDocs = docs[typeName];
  };

  methodSignature(method: MethodDesc): string { return signature(method); }

  trackSourceClick() {
  }
}
