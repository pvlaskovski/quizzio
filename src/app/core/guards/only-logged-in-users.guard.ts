import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class OnlyLoggedInUsersGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) { }

    canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {

        let isLogged: boolean = this.authService.isLoggedIn;

        if (isLogged) {
            return true;
        }

        return this.router.createUrlTree(['/login']);
    }

}
