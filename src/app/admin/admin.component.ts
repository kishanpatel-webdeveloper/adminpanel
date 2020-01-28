import { Component, OnInit } from '@angular/core';
import { Permission } from '../model/Permission';
import { MethodUtilityService } from 'src/app/services/Method-utility.service';
import { APIService } from 'src/app/services/api.service';
import { VariableService } from '../services/variable.service';
import { Deserialize } from 'cerialize';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

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
      console.log(this.arrayForLoggedInUserPermissions);
    }));

  }

}
