import { Component } from '@angular/core';
import { FbLoginComponent } from '../login/fblogin.component';
import { FbLogoutComponent } from '../login/fblogout.component';
import { LocalStorageService } from '../../service/local.storage.service';
import { JwtHelper } from 'angular2-jwt';


@Component({
	selector : 'my-header',
	template : require('./header.component.jade'),
	directives : [FbLoginComponent,FbLogoutComponent],
	providers : [LocalStorageService]
})

export class HeaderComponent {
	
	constructor(private localStorageService : LocalStorageService){}

	isTokenExpired(){
		return this.localStorageService.isTokenExpired();
	}
}