import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DefaultComponent } from './default';

import {
  NgmdExample
} from './components';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'components', redirectTo: 'components/example' },
  { path: 'components/example', component: NgmdExample },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
