import { Injectable }     from '@angular/core';

@Injectable()
export class FacebookLoginService{

    statusChangeCallback(response: any)
    {
        console.log("statusChangeCallback");
        console.log(JSON.stringify(response));


        if (response.status === 'connected')
        {
            console.log('now connected '+JSON.stringify(response));
            this.testAPI();
        }
        else if (response.status === 'not_authorized')
            console.log('Please log into this app.');
        else
            console.log('Please log into Facebook');
    }

    testAPI()
    {
        console.log('Welcome!  Fetching your information.... ');

        FB.api('/me?', {fields : 'name, email'},function(response: any) {
            console.log('Successful login for: ' + response.email);
            console.log('Thanks for logging in, ' + response.name + '!');
        });
    }

    login()
    {
        var loginService = this;
        FB.login(function(response) {
            loginService.statusChangeCallback(response);
        }, {scope: 'public_profile, email'});

    }



}