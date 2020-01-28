import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { PageNotFoundComponent } from 'src/app/shared/page-not-found/page-not-found.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RoleListComponent } from './role-list/role-list.component';
import { PermissionListComponent } from './permission-list/permission-list.component';

const settingsRoutes: Route[] = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UserListComponent },
  { path: 'roles', component: RoleListComponent},
  { path: 'permissions', component: PermissionListComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [UserListComponent, RoleListComponent, PermissionListComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(settingsRoutes)
  ],
  exports: [RouterModule]
})
export class SettingsModule { }
