import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgmModule } from '@ng-mcpm/ng-mcpm';

import { DefaultComponent } from './default';
// import {GettingStarted} from './getting-started';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { NgmdExampleModule } from './components';
import { NgmdSharedModule } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    // GettingStarted
  ],
  imports: [
    BrowserModule,
    routing,
    NgmModule.forRoot(),
    NgmdExampleModule,
    NgmdSharedModule
  ],
  bootstrap: [AppComponent]
})
export class NgmdModule {
}
