import { Injectable } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { VariableService } from 'src/app/services/variable.service';
import { Deserialize } from 'cerialize';
import { Role } from 'src/app/model/Role';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Permission } from 'src/app/model/Permission';

@Injectable({
  providedIn: 'root'
})
export class PermissionAccessService {

  permissionForm: FormGroup;
  arrayForIdAndNameOfRole: Array<Role> = new Array<Role>();
  arrayForPermissions: Array<Permission> = new Array<Permission>();
  selectedRoleId: string;

  constructor(
    public formBuilder: FormBuilder,
    public apiService: APIService
  ) { }

  getAllNameAndIdOfRoles() {
    const params = {};
    this.apiService.getMethodAPI(VariableService.API_GET_NAME_AND_ID_OF_ROLE, params, (response => {
      this.arrayForIdAndNameOfRole = Deserialize(response, Role);
      console.log(this.arrayForIdAndNameOfRole);
    }));
  }

  changeRole() {
    console.log(this.selectedRoleId);
    const params = {};
    this.apiService.getMethodAPI(VariableService.API_GET_ALL_PERMISSIONS_BY_ROLE_ID + this.selectedRoleId, params, (response => {
      this.arrayForPermissions = Deserialize(response, Permission);
      console.log(this.arrayForPermissions);
    }));

  }
}
