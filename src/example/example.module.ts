import {
    NgModule,
    ModuleWithProviders
} from '@angular/core';

import { NgmExample } from './example';

export { NgmExample } from './example';

@NgModule({ declarations: [NgmExample], exports: [NgmExample] })
export class NgmExampleModule {
    static forRoot(): ModuleWithProviders { return { ngModule: NgmExampleModule }; }
}
