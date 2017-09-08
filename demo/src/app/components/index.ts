export * from './example';


import { NgModule } from '@angular/core';

import { NgmdSharedModule } from '../shared';

import { NgmdExampleModule } from './example';

@NgModule({
    imports: [
        NgmdExampleModule,
    ],
    exports: [
        NgmdExampleModule
    ]
})
export class NgmdDemoModule { }
