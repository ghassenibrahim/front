import { TokenStorageService } from './token-storage.service';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.auth.loggedIn()) {
      //console.log('true')
      return true
    } else {
      console.log('false')
      this.router.navigate(['/login'])
      return false
    }
  }
}
