import { Injectable }     from '@angular/core';

@Injectable()
export class FacebookLoginService{

    statusChangeCallback(response: any){
        console.log('statusChangeCallback');
        console.log(response);

        if (response.status === 'connected')
            this.testAPI();
        else if (response.status === 'not_authorized')
            document.getElementById('status').innerHTML = 'Please log into this app.';
        else
            document.getElementById('status').innerHTML = 'Please log into Facebook';
    }

    testAPI() {
        console.log('Welcome!  Fetching your information.... ');

        FB.api('/me', {fields : 'name, email'},function(response: any) {
            console.log('Successful login for: ' + response.email);
            console.log('Thanks for logging in, ' + response.name + '!');
        });
    }

    login() {
        var loginService = this;
        FB.getLoginStatus(function(response: any) {
            loginService.statusChangeCallback(response)
        });

    }



}