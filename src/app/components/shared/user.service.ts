import { Injectable }     from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

    constructor(private http: Http) { }

    login(data:any): Promise<any> {
        console.log('avout to send to backend');
        let headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3001/authorize', JSON.stringify(data), {headers:headers})
            .toPromise();
    }
}
