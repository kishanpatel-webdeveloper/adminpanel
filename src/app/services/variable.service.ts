import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VariableService {

  constructor() { }

  //Navigation URL
  static REGISTER = '/register';
  static LOGIN = '/login';
  static ADMIN = '/admin';
  static CLIENT = '/client';

  //API URL
  //static API_URL = 'http://192.168.2.162:8080/websocket/';
  //static API_LOGIN = 'auth/login';
  //static API_URL = 'http://192.168.2.162:8081/api/';
  //static API_URL = 'http://localhost:8080/api/';
  static API_URL = 'https://vidhibackend.herokuapp.com/api/';
  static API_LOGIN = 'login';
  static API_GET_NAME_AND_ID_OF_ROLE = 'role/getAllNameAndIdOfRoles';
  static API_GET_ALL_PERMISSIONS_BY_ROLE_ID = 'permission/getAllPermissionsByRoleId/';
  static API_GET_ALL_PERMISSIONS_BY_USER_ID = 'permission/getAllPermissionsByUserId/';

  arrayOfApiNameToExcludeToken: string[] = [
    VariableService.API_LOGIN
  ];

}
