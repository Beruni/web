import {Injectable}     from '@angular/core';

@Injectable()
export class FacebookLoginService {
    constructor() {
        (function (s:string, id:string) {
            let js:any;
            var fjs = document.getElementsByTagName(s)[0];
            if (document.getElementById(id)) return;
            js = document.createElement(s);
            js.id = id;
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

    login(callback:any) {
        var loginService = this;
        FB.login(function (response:any) {
            callback(response);
        }, {scope: 'public_profile, email'});

    }


}