import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';



@Injectable()
export class HomeGuard implements CanActivate {

    constructor(
        private router: Router,
        private _authService:AuthService,
    ) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this._authService.getToken() && this._authService.isLoggedIn()) {
            console.log('in auth guard')
            return true;
        } else {
            this.router.navigate(['/']);
            return false;
        }
    }
}


