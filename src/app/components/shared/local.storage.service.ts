import { Injectable } from '@angular/core';


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

}