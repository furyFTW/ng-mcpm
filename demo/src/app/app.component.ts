import {Component, OnInit} from '@angular/core';
import {componentsList} from './shared';

import '../style/app.scss';

@Component({
  selector: 'ngmd-app',
  templateUrl: './app.component.html'
  
})
export class AppComponent   {
  navbarCollapsed = true;

  components = componentsList;

  constructor( ){  }

}
