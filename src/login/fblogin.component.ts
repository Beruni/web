import {Component, OnInit} from "@angular/core";
import { FacebookLoginService } from './facebook-login.service';


@Component({
    selector: 'fblogin',
    template: require('./fblogin.component.jade'),
    providers: [FacebookLoginService]
})

export class FbLoginComponent implements OnInit{
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

        window.fbAsyncInit = this.fbAsyncInit;

    }

    fbAsyncInit() {
        FB.init({
            appId: '1764713313741831',
            cookie: true,  // enable cookies to allow the server to access
            // the session
            xfbml: true,  // parse social plugins on this page
            version: 'v2.5' // use graph api version 2.5
        });
    }

    loginWithFacebook() {
        console.log('fb login button clicked');

        this.facebookLoginService.login();
    }
}