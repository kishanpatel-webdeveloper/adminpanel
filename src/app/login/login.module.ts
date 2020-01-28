import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    SharedModule,
    LoginRoutingModule
  ],
  exports: []
})
export class LoginModule { }
