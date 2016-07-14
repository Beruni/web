import {Component} from "@angular/core";
import { FacebookLoginService } from './facebook-login.service';


@Component({
    selector: 'fblogin',
    template: require('./fblogin.component.jade'),
    providers: [FacebookLoginService]
})

export class FbLoginComponent {
    constructor(private facebookLoginService: FacebookLoginService) {
    }

    loginWithFacebook() {
        console.log('fb login button clicked');
        this.facebookLoginService.login();
    }
}