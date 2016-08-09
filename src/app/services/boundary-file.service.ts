import {Injectable} from "@angular/core";
import "rxjs/add/operator/toPromise";
import {UploadService} from "./upload-interface";
import {UploadableFile} from "../components/dashboard/data_file/uploadable-file";
import {Http, Headers, RequestOptions} from "@angular/http";
import {LocalStorageService} from "./local.storage.service";

@Injectable()
export class BoundaryFileService implements UploadService {
    //TODO: move it to a separate constant file/class.
    private static BASE_URL:string = 'http://127.0.0.1:3000';
    private token:string;
    private request:XMLHttpRequest;

    constructor(private http:Http, private localStorageService:LocalStorageService) {
        this.token = this.localStorageService.getUserToken();
    }

    upload(boundaryFile:UploadableFile, callback:Function):any {
        var data = new FormData();
        data.append("boundaryFile", boundaryFile.file);
        data.append("title", boundaryFile.title);
        data.append("tags", boundaryFile.tags.toString());
        var requestReference = this.request;
        this.request.onreadystatechange = function () {
            console.log(requestReference.response);
            if (requestReference.status == 403) {
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
        this.request.open("POST", BoundaryFileService.BASE_URL + "/upload/");
        this.request.setRequestHeader("authorization", this.token);
        return this;
    }

    attachListener(event:string, listener:EventListenerObject):UploadService {
        this.request.upload.addEventListener(event, listener, false);
        return this;
    }

    fetchBoundaryFiles(callback:any) {
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': this.token
        });
        let options = new RequestOptions({headers: headers});

        this.http.get(BoundaryFileService.BASE_URL + "/fetchFiles", options)
            .map(res => res.json())
            .subscribe(data => callback(data));
    }
}