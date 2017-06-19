import { Component } from '@angular/core';

export const componentsList = [
  'Example',

];

@Component({
  selector: 'ngbd-side-nav',
  templateUrl: './side-nav.component.html',
})
export class SideNavComponent {
  components = componentsList;
}
