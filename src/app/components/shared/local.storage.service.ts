import { Injectable } from '@angular/core';


@Injectable()
export class LocalStorageService {

	storeUserToken(token: string) {
		localStorage.setItem('user_token', token);
	}

}