import {Injectable} from "@angular/core";
import "rxjs/add/operator/toPromise";
import {UploadService} from "./upload-interface";
import {UploadableFile} from "../components/dashboard/data_file/uploadable-file";
import {Http, Headers, RequestOptions} from "@angular/http";
import {LocalStorageService} from "./local.storage.service";
import {NodeDiscoveryService} from "./discovery.service";

@Injectable()
export class BoundaryFileService implements UploadService {
    private baseUrl:string;
    private token:string;
    private request:XMLHttpRequest;

    constructor(private http:Http, private localStorageService:LocalStorageService, private nodeDiscoveryService:NodeDiscoveryService) {
        this.token = this.localStorageService.getUserToken();
        let serviceParams = nodeDiscoveryService.serviceParams('boundary_file_service');
        this.baseUrl = nodeDiscoveryService.getServiceUrl(serviceParams['ServiceAddress'], serviceParams['ServicePort'], '');
    }

    upload(boundaryFile:UploadableFile, callback:Function):any {
        var data = new FormData();
        data.append("boundaryFile", boundaryFile.file);
        data.append("title", boundaryFile.title);
        data.append("tags", boundaryFile.tags.toString());
        var requestReference = this.request;
        this.request.onreadystatechange = function () {
            if (requestReference.status == 406) {
                callback(false, "file is fail to upload");
            }
            if (requestReference.status == 200) {
                callback(true, "file is successfully uploaded");
            }
        };

        this.request.send(data);
    }


    init():UploadService {
        this.request = new XMLHttpRequest();
        this.request.open("POST", this.baseUrl + "/upload/");
        this.request.setRequestHeader("authorization", this.token);
        return this;
    }

    attachListener(event:string, listener:EventListenerObject):UploadService {
        this.request.upload.addEventListener(event, listener, false);
        return this;
    }

    headers(){
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': this.token
        });
        return new RequestOptions({headers: headers});
    }

    fetchBoundaryFiles(callback:any) {
        this.http.get(this.baseUrl + "/fetchFiles", this.headers())
            .map(res => res.json())
            .subscribe(data => callback(data));
    }

    fetchBoundaryFileById(fileId:string, callback:any) {
        this.http.get(this.baseUrl + "/fetchFile/"+ fileId, this.headers())
            .map(res => res.json())
            .subscribe(data => callback(data));
    }
}