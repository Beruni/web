import {Component, OnInit} from "@angular/core";
import { FacebookLoginService } from './facebook-login.service';


@Component({
    selector: 'login',
    template: require('./login.component.jade'),
    providers: [FacebookLoginService]
})

export class LoginComponent implements OnInit{
    constructor(private facebookLoginService: FacebookLoginService) {}

    ngOnInit(){
        (function(s: string, id: string) {
            let js: any;
            var fjs = document.getElementsByTagName(s)[0];
            if (document.getElementById(id)) return;
            js = document.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }('script', 'facebook-jssdk'));
    }

    loginWithFacebook() {
        this.facebookLoginService.login();
    }
}