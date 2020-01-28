import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MethodUtilityService } from './Method-utility.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor(
    public router: Router,
    public methodUtils: MethodUtilityService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('inside can Activate...');

    const decodedToken = this.methodUtils.decodeToken();

    if (!this.methodUtils.isNullUndefinedOrBlank(decodedToken)) {
      console.log(decodedToken['role'][0]['authority']);
      if (decodedToken['role'][0]['authority'] === 'ADMIN') {
        return true;
      }
    }


    this.router.navigate(['/login']);
    return false;
  }
}
