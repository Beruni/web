import {Injectable} from "@angular/core";
import {JwtHelper} from "angular2-jwt/angular2-jwt";


@Injectable()
export class LocalStorageService {

	public static USER_TOKEN_KEY: string = "user_token";

	storeUserToken(token: string) {
		localStorage.setItem(LocalStorageService.USER_TOKEN_KEY, token);
	}

	getUserToken() {
		return localStorage.getItem(LocalStorageService.USER_TOKEN_KEY);
	}

	deleteToken(){
		localStorage.removeItem(LocalStorageService.USER_TOKEN_KEY);
	}

	isTokenExpired(){
		var jwtHelper : JwtHelper =  new JwtHelper();
		var token = this.getUserToken();
		if(token)
			return jwtHelper.isTokenExpired(token);
		return true;
	}

}