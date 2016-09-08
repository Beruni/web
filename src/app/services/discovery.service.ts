import {Headers, Http} from "@angular/http";
import {Injectable} from "@angular/core";

@Injectable()
export class NodeDiscoveryService {
  discoveryDataCache: Array<any>;

  constructor(private http:Http) {
    this.discoveryDataCache = [{
      'ServiceID': 'user_service',
      'ServiceAddress': 'localhost',
      'ServicePort': '3001'
    },
    {
      'ServiceID': 'boundary_file_service',
      'ServiceAddress': 'localhost',
      'ServicePort': '3000'
    },
    {
      'ServiceID': 'data_service',
      'ServiceAddress': 'localhost',
      'ServicePort': '3002'
    }];
  }

  fetchNodeServers() {
    if(process.env.DISCOVERY_SERVICE_HOST) {
      let headers = new Headers({'Content-Type': 'application/json'});
      var promise = this.http.get(this.getNodeServerUrl(), {headers:headers}).map(res => res.json()).toPromise();
      promise.then(data => this.discoveryDataCache = data);
      return promise;
    }
  }

  getNodeServerUrl() {
    return process.env.DISCOVERY_SERVICE_HOST + ':' + process.env.DISCOVERY_SERVICE_PORT + process.env.DISCOVERY_SERVICE_PATH;
  }

  clearDiscoveryDataCache() {
    this.discoveryDataCache = null;
  }

  serviceParams(serviceName: string) {
    return this.discoveryDataCache.find(function(entry: any) {
      return entry['ServiceID'].match(serviceName);
    });
  }
}
