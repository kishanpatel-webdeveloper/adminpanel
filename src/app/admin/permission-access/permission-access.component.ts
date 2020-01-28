import { Component, OnInit } from '@angular/core';
import { PermissionAccessService } from './permission-access.service';
import { Permission } from 'src/app/model/Permission';

@Component({
  selector: 'app-permission-access',
  templateUrl: './permission-access.component.html',
  styleUrls: ['./permission-access.component.css']
})
export class PermissionAccessComponent implements OnInit {

  public menuItems: Permission[] = new Array<Permission>();
  options = {};

  constructor(
    public permissionAccessService: PermissionAccessService
  ) { }

  ngOnInit() {
    this.permissionAccessService.getAllNameAndIdOfRoles();
  }

  onEvent(event) {
    console.log(event['node']['data']);
  }

  onExpand() {
    console.log('ffff');
  }

}
