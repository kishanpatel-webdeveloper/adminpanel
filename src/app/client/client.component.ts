import { Component, OnInit } from '@angular/core';
import { APIService } from '../services/api.service';
import { MethodUtilityService } from '../services/Method-utility.service';
import { Permission } from '../model/Permission';
import { VariableService } from '../services/variable.service';
import { Deserialize } from 'cerialize';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  arrayForLoggedInUserPermissions: Permission[] = new Array<Permission>();

  constructor(
    public methodUtils: MethodUtilityService,
    public apiService: APIService
  ) { }

  ngOnInit() {

    const currentUserId = localStorage.getItem('userId');
    const params = {};
    this.apiService.getMethodAPI(VariableService.API_GET_ALL_PERMISSIONS_BY_USER_ID + currentUserId, params, (response => {
      this.arrayForLoggedInUserPermissions = Deserialize(response, Permission);
    }));
  }

}
