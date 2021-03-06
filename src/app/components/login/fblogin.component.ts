import { Component } from "@angular/core";
import { FacebookLoginService } from '../../services/fblogin.service';
import { UserService } from '../../services/user.service';
import { LocalStorageService } from '../../services/local.storage.service';
import {Router} from "@angular/router";


@Component({
    selector: 'fblogin',
    template: require('./fblogin.component.jade'),
    providers: [FacebookLoginService, UserService, LocalStorageService]
})

export class FbLoginComponent {
    constructor(
        private userService: UserService, 
        private facebookLoginService: FacebookLoginService,
        private localStorageService: LocalStorageService,
        private router:Router) {
    }

    loginWithFacebook() {
        console.log('fb login button clicked ');
        this.facebookLoginService.login()
            .then((response:any) => {
                if (response.status === 'connected') {

                    let data = {
                        userId: response.authResponse.userID, 
                        accessToken: response.authResponse.accessToken,
                        source: 'FB'
                    };

                    this.sendLoginResquestWithToken(data);
                } else if (response.status === 'not_authorized') {
                    console.log('Please log into this app.');
                } else {
                    console.log('Please log into Facebook');
                }
            });
    }

    private sendLoginResquestWithToken(data: any) { 
        this.userService.login(data)
            .then((res: any) => this.handleLogin(res))
            .catch((error: any) => console.error('An error occurred', error));
    }

    private handleLogin(res: any) {
      var data =  res.json();
      this.localStorageService.storeUserToken(data.user_token);
        this.router.navigate(['dashboard'])
    }
   
}