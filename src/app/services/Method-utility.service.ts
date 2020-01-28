import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
import { decode } from 'punycode';

@Injectable({
  providedIn: 'root'
})
export class MethodUtilityService {

  constructor(
    private http: HttpClient
  ) { }

  // checks whether object null or undefined or blank and returns true or false
  public isNullUndefinedOrBlank(obj) {
    if (obj == null || obj === undefined || (obj === '' && obj !== 0)) {
      return true;
    }
    return false;
  }

  isEmptyObjectOrNullUndefiend(...value) {
    if (value && value.length > 0) {
      for (let i = 0; i < value.length; i++) {
        if (this.isNullUndefinedOrBlank(value[i]) || this.isEmptyObject(value[i])) {
          return true;
        }
      }
    }
    return false;
  }

  isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }

  getToken() {
    return localStorage.getItem('token') ? localStorage.getItem('token') : null;
  }

  isAuthenticated() {
    return localStorage.getItem('isAuthenticate') ? localStorage.getItem('isAuthenticate') : null;
  }

  decodeToken(): object {
    const token = localStorage.getItem('token');
    const decoded = jwt_decode(token);
    return decoded;
  }

  logout() {

    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('userId');
    localStorage.removeItem('isAuthenticate');
  }



}
