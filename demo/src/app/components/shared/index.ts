import { NgModule } from '@angular/core';

import { NgmdSharedModule } from '../../shared';
import { ExampleBoxComponent } from './example-box/example-box.component';
import { NgbdApiDocs } from './api-docs/api-docs.component';
import { NgbdApiDocsClass } from './api-docs/api-docs-class.component';
import { NgbdApiDocsConfig } from './api-docs/api-docs-config.component';
import { NgbdFragment } from './fragment/fragment.directive';

@NgModule({
  imports: [NgmdSharedModule],
  declarations: [ExampleBoxComponent, NgbdApiDocs, NgbdApiDocsClass, NgbdApiDocsConfig, NgbdFragment],
  exports: [ExampleBoxComponent, NgbdApiDocs, NgbdApiDocsClass, NgbdApiDocsConfig, NgbdFragment]
})
export class NgmdComponentsSharedModule { }
