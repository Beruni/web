import { Injectable }     from '@angular/core';

@Injectable()
export class FacebookLoginService{

     login() {
        console.log("testing facebook login");

        // statusChangeCallback(response) {
        //     console.log('statusChangeCallback');
        //     console.log(response);
        //
        //     if (response.status === 'connected')
        //         testAPI();
        //
        //     else if (response.status === 'not_authorized')
        //         document.getElementById('status').innerHTML = 'Please log ' +
        //         'into this app.';
        //     else
        //         document.getElementById('status').innerHTML = 'Please log ' +
        //         'into Facebook.';
        // }

        // checkLoginState() {
        //     FB.getLoginStatus(function(response) {
        //     statusChangeCallback(response);
        //     });
        // }

        window.fbAsyncInit = function () {
            FB.init({
                appId: '1764713313741831',
                cookie: true,  // enable cookies to allow the server to access
                // the session
                xfbml: true,  // parse social plugins on this page
                version: 'v2.5' // use graph api version 2.5
            });
            // FB.getLoginStatus(function(response) {
            //     statusChangeCallback(response);
            // });
        }

         console.log(FB);

     }
}