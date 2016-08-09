import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {LocalStorageService} from "./local.storage.service";
import {Observable} from "rxjs/Rx";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private localStorageService: LocalStorageService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean  {
        if (this.localStorageService.isTokenExpired()) {
            this.router.navigate(['home'])
            return false;
        }
        return true;
    }
}