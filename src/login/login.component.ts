import {Component} from "@angular/core";
import { FacebookLoginService } from './facebook-login.service';


@Component({
    selector: 'login',
    template: require('./login.component.jade'),
    providers: [FacebookLoginService]
})
export class LoginComponent {
    constructor(private facebookLoginService: FacebookLoginService) {}

    loginWithFacebook() {
        this.facebookLoginService.login();
    }
}