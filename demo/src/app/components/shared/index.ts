import { NgModule } from '@angular/core';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap/tabset/tabset.module';
import { NgmdSharedModule } from '../../shared';
import { ExampleBoxComponent } from './example-box/example-box.component';
import { NgmdApiDocs } from './api-docs/api-docs.component';
import { NgmdApiDocsClass } from './api-docs/api-docs-class.component';
import { NgmdApiDocsConfig } from './api-docs/api-docs-config.component';
import { NgbdFragment } from './fragment/fragment.directive';

@NgModule({
  imports: [NgmdSharedModule,
        NgbTabsetModule,],
  declarations: [ExampleBoxComponent, NgmdApiDocs, NgmdApiDocsClass, NgmdApiDocsConfig, NgbdFragment],
  exports: [ExampleBoxComponent, NgmdApiDocs, NgmdApiDocsClass, NgmdApiDocsConfig, NgbdFragment]
})
export class NgmdComponentsSharedModule { }
