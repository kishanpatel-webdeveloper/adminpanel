import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register/register.component';


const loginRoutes: Route[] = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
