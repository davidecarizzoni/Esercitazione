import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditRouteGuardService {

  constructor(private router : Router) { }

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (sessionStorage.getItem('user') != null  && sessionStorage.getItem('privilege') === 'admin') {
      return true;
    } else {
      this.router.navigateByUrl('/home');
      return false;
    }
  }
}
