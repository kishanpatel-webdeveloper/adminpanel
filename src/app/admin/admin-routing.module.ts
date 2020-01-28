import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin.component';
import { PermissionAccessComponent } from './permission-access/permission-access.component';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';

const adminRoutes: Route[] = [
  { path: '', redirectTo: 'work_area', pathMatch: 'full' },
  {
    path: 'work_area', component: AdminComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'access_page', component: PermissionAccessComponent },
      { path: 'settings', loadChildren: './settings/settings.module#SettingsModule' }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {

}
