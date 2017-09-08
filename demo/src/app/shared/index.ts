import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap/tabset/tabset.module';
import { NgmModule } from '@ng-mcpm/ng-mcpm';

import { ComponentWrapper } from './component-wrapper/component-wrapper.component';
import { SideNavComponent } from './side-nav/side-nav.component';

export { componentsList } from './side-nav/side-nav.component';

@NgModule({
  imports: [CommonModule, RouterModule, NgbTabsetModule],
  exports: [
    CommonModule,
    RouterModule,
    ComponentWrapper,
    SideNavComponent,
    NgmModule,
    FormsModule,
    ReactiveFormsModule,
    JsonpModule
  ],
  declarations: [
    ComponentWrapper,
    SideNavComponent,
  ]
})
export class NgmdSharedModule {
}
