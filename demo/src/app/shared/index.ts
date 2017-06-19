import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';

import { NgmModule } from '@ng-mcpm/ng-mcpm';

import { ContentWrapper } from './content-wrapper/content-wrapper.component';
import { SideNavComponent } from './side-nav/side-nav.component';

export { componentsList } from './side-nav/side-nav.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [
    CommonModule,
    RouterModule,
    ContentWrapper,
    SideNavComponent,
    NgmModule,
    FormsModule,
    ReactiveFormsModule,
    JsonpModule
  ],
  declarations: [
    ContentWrapper,
    SideNavComponent,
  ]
})
export class NgmdSharedModule {
}
