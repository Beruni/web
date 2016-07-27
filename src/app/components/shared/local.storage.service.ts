import { Injectable } from '@angular/core';


@Injectable()
export class LocalStorageService {

	storeUserToken(token: string) {
		localStorage.setItem('user_token', token);
	}

	getUserToken() {
		return localStorage.getItem('user_token');
	}

	deleteToken(){
		localStorage.removeItem('user_token');
	}

}