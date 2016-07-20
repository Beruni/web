import {Injectable}     from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

    constructor(private http: Http) {

    }

    login(data:any, callback:any): Promise<any>
    {
        console.log('avout to send to backend');
        let headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3001/login',JSON.stringify(data),{headers:headers})
            .toPromise()
            .then(callback)
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        //return Promise.reject(error.message || error);
    }

}
