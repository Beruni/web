import { Component } from "@angular/core";
import { LocalStorageService } from '../../service/local.storage.service';
import {Router} from "@angular/router";

@Component({
    selector : 'fblogout',
    template : require('./fblogout.component.jade'),
    providers : [LocalStorageService]
})

export class FbLogoutComponent {
    
    constructor(private localStorageService:LocalStorageService,
                private router:Router){}
    
    logout(){
        this.localStorageService.deleteToken();
        this.router.navigate(['home'])
    }
}