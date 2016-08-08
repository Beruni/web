import { Component } from "@angular/core";
import { LocalStorageService } from '../../service/local.storage.service';

@Component({
    selector : 'fblogout',
    template : require('./fblogout.component.jade'),
    providers : [LocalStorageService]
})

export class FbLogoutComponent {
    
    constructor(private localStorageService:LocalStorageService){}
    
    logout(){
        this.localStorageService.deleteToken();
        window.location.href = 'http://localhost:8080';
    }
}