import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MethodUtilityService } from './Method-utility.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    public router: Router,
    public methodUtils: MethodUtilityService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('inside can Activate...');

      if (this.methodUtils.isAuthenticated()) {
        console.log('true');
        return true;
      }

    this.router.navigate(['/login']);
    return false;
  }
}
