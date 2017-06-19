import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DefaultComponent } from './default';
import {
} from './components';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: DefaultComponent },
  { path: 'components', redirectTo: 'components/example' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
