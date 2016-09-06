import {Headers, Http} from "@angular/http";
import {Injectable} from "@angular/core";

@Injectable()
export class NodeDiscoveryService {
  discoveryDataCache: Array<any>;

  constructor(private http: Http) { 
    if(!process.env.DISCOVERY_SERVICE_HOST) {
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
    } else {
      this.fetchNodeServers();
    }
  }

  fetchNodeServers() {
    var service = this;
    console.log('***********');
    if(!this.discoveryDataCache) {
      let headers = new Headers({'Content-Type': 'application/json'});
      console.log(this.http.get(this.getNodeServerUrl(), {headers:headers})
        .map(res => res.json()));
    }
    return service;
  }

  getNodeServerUrl() {
    return process.env.DISCOVERY_SERVICE_HOST + ':8500' + '/v1/catalog/service/node';
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
