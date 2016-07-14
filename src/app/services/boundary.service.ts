import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class BoundaryService {

  constructor (private http: Http) {}

  private baseUrl = 'http://localhost:3000/ping';  // URL to web API
 
  ping (): Observable <string> {
    return this.http.get(this.baseUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    return res.text();
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
  
}