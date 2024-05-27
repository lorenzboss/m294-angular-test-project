import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatalistComponent } from './pages/datalist/datalist.component';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { Page3Component } from './pages/page3/page3.component';
import { appCanActivate } from './guard/app.auth.guard';
import { AppRoles } from '../app.roles';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  { path: 'page1', component: Page1Component },
  {
    path: 'page2',
    component: Page2Component,
    canActivate: [appCanActivate],
    data: { roles: [AppRoles.Admin] },
  },
  { path: 'page3', component: Page3Component },
  { path: 'datalist', component: DatalistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
