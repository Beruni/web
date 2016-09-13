import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {NodeDiscoveryService} from "./discovery.service";

@Injectable()
export class UserService {
    private baseUrl: string
    
    constructor(private http: Http, private nodeDiscoveryService:NodeDiscoveryService) { 
      let serviceParams = nodeDiscoveryService.serviceParams('user_service');
      this.baseUrl = nodeDiscoveryService.getServiceUrl(serviceParams['ServiceAddress'], serviceParams['ServicePort'], '');
    }

    login(data:any): Promise<any> {
        let headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.baseUrl + '/authorize', JSON.stringify(data), {headers:headers})
            .toPromise();
    }
}
