import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { RoleGuardService } from './services/role-guard.service';

const routes: Route[] = [
  { path: '', loadChildren: './login/login.module#LoginModule' },
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule', canActivate: [AuthGuardService, RoleGuardService] },
  { path: 'client', loadChildren: './client/client.module#ClientModule', canActivate: [AuthGuardService] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
