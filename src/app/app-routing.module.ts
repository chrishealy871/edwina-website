import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './component/page-not-found/page-not-found.component';
import {HomeComponent} from './component/home/home.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: '**', component: PageNotFoundComponent}
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});
