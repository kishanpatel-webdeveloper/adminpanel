import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VariableService } from '../services/variable.service';
import { LoginRequest } from '../model/LoginRequest';
import { APIService } from '../services/api.service';
import { Serialize } from 'cerialize';
import { MethodUtilityService } from '../services/Method-utility.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginRequest = new LoginRequest();
  public loginError = '';
  public token: string;
  public role: string;


  constructor(
    public router: Router,
    public apiService: APIService,
    public methodUtils: MethodUtilityService
  ) { }

  ngOnInit() {
  }

  openRegisterForm() {
    this.router.navigate([VariableService.REGISTER]);
  }

  onLogin() {

    if (!this.methodUtils.isNullUndefinedOrBlank(this.loginRequest.username)
      && !this.methodUtils.isNullUndefinedOrBlank(this.loginRequest.password)) {
      this.loginError = '';

      this.apiService.loginMethod(VariableService.API_LOGIN, Serialize(this.loginRequest), (response) => {
        if (!this.methodUtils.isNullUndefinedOrBlank(response)) {
          if (response['status'] === 200) {
            this.token = response['data']['token'];
            localStorage.setItem('token', this.token);
            localStorage.setItem('username', response['data']['user']['name']);
            localStorage.setItem('userId', response['data']['user']['id']);
            localStorage.setItem('isAuthenticate', 'true');
            this.role = response['data']['role'];
            if (this.role === 'ADMIN') {
              this.router.navigate([VariableService.ADMIN]);
            } else {
              this.router.navigate([VariableService.CLIENT]);
            }
          } else if (response['status'] === 401) {
            this.loginError = response['error']['message'];
          }
        }
      }
      );

    } else {
      this.loginError = 'Username/Password is required!';
    }

  }

}
