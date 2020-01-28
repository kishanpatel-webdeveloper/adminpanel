import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { ClientComponent } from './client.component';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';

const clientRoutes: Route[] = [
  { path: '', redirectTo: 'work_area', pathMatch: 'full' },
  {
    path: 'work_area', component: ClientComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: ClientDashboardComponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forChild(clientRoutes)],
  exports: [RouterModule]
})
export class ClientRoutingModule {

}
