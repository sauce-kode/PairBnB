import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { UrlTree, CanLoad, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor (private authService: AuthService, private router: Router) {}
  
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
    if(!this.authService.userIsAuthenticated){
      this.router.navigateByUrl('/auth')
    }
    return this.authService.userIsAuthenticated
  }
  
}
