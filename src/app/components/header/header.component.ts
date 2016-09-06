import {Component} from "@angular/core";
import {FbLoginComponent} from "../login/fblogin.component";
import {FbLogoutComponent} from "../login/fblogout.component";
import {LocalStorageService} from "../../services/local.storage.service";
import {Router} from "@angular/router";


@Component({
	selector : 'my-header',
	template : require('./header.component.jade'),
	directives : [FbLoginComponent,FbLogoutComponent],
	providers : [LocalStorageService]
})

export class HeaderComponent {
	
	constructor(private localStorageService : LocalStorageService, private router:Router){}

	isTokenExpired(){
		return this.localStorageService.isTokenExpired();
	}

	goToHome(){
		// window.location.href = '';
		this.router.navigateByUrl('/');
	}
}