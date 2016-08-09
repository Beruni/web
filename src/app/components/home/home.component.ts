import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES, Router} from "@angular/router";
import {LocalStorageService} from "../../services/local.storage.service";

@Component({
    selector : 'home',
    template : require('./home.component.jade'),
    directives: [ROUTER_DIRECTIVES],
    providers:[LocalStorageService]
})

export class HomeComponent {
    constructor(private localStorageService:LocalStorageService,
                private router:Router){}

    ngOnInit(){
        if(!this.localStorageService.isTokenExpired()){
            this.router.navigate(['dashboard']);
        }
    }
}