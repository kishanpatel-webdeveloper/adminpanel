import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { ClientRoutingModule } from './client-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ClientComponent } from './client.component';

@NgModule({
  declarations: [ClientDashboardComponent, ClientComponent],
  imports: [
    CommonModule,
    SharedModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
