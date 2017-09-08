import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DefaultComponent } from './default';
import { DEFAULT_TAB } from './shared/component-wrapper/component-wrapper.component';
import {
  NgmdExample
} from './components';



const DEFAULT_API_PATH = { path: '', pathMatch: 'full', redirectTo: DEFAULT_TAB };

const componentRoutes = [{
  path: 'components/example',
  children: [
    DEFAULT_API_PATH,
    { path: ':tab', component: NgmdExample }
  ]
}];

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home',  redirectTo: 'components/example' },
  { path: 'components', pathMatch: 'full', redirectTo: 'components/example' },
  ...componentRoutes,
  { path: '**', redirectTo: 'home' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
