export * from './example.component';

import { NgModule } from '@angular/core';

import { NgmdSharedModule } from '../../shared';
import { NgmdComponentsSharedModule } from '../shared';
import { NgmdExample } from './example.component';
import { DEMO_DIRECTIVES } from './demos';

@NgModule({
    imports: [NgmdSharedModule, NgmdComponentsSharedModule],
    exports: [NgmdExample],
    declarations: [NgmdExample, ...DEMO_DIRECTIVES]
})
export class NgmdExampleModule { }