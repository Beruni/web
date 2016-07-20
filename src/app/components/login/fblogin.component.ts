import {Component} from "@angular/core";
import { FacebookLoginService } from './facebook-login.service';
import { UserService } from '../shared/user.service';


@Component({
    selector: 'fblogin',
    template: require('./fblogin.component.jade'),
    providers: [FacebookLoginService, UserService]
})

export class FbLoginComponent {
    constructor(private userService: UserService, private facebookLoginService: FacebookLoginService) {

    }



    loginWithFacebook() {
        var loginComponent = this;
        console.log('fb login button clicked ');
        this.facebookLoginService.login(function(response:any)
        {
            if (response.status === 'connected') {

                let data = {userId:response.authResponse.userID,
                    accessToken:response.authResponse.accessToken,source:'FB'}

                console.log('loginWithFacebook ' + JSON.stringify(data));
                loginComponent.sendLoginResquestWithToken(data);

            }
            else if (response.status === 'not_authorized')
                console.log('Please log into this app.');
            else
                console.log('Please log into Facebook');
        });
    }

    private sendLoginResquestWithToken = function(data:any){
        console.log('sendLoginResquestWithToken ' + JSON.stringify(data));
        console.log('sendLoginResquestWithToken == '+ this.userService);
        this.userService.login(data,this.handleLogin);
    }

    private handleLogin = function (res:any) {
        console.log('handleLogin ' + JSON.stringify(res));
    }



}