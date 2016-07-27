import { Injectable }  from '@angular/core';


@Injectable()
export class FacebookLoginService {
    constructor() {
        (function (s: string, id: string) {
            let js: any;
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
            appId: '486249311585045',
            cookie: true,  // enable cookies to allow the server to access
            // the session
            xfbml: true,  // parse social plugins on this page
            version: 'v2.7' // use graph api version 2.5
        });
    }

    login(): Promise<any> {
        return new Promise((resolve, reject) => FB.login(
                (response: any) => resolve(response), 
                {scope: 'public_profile, email'}
        ));
    }
}