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

    constructor(private http: Http, private localStorageService : LocalStorageService) {
        this.token = this.localStorageService.getUserToken();
    }

    upload(boundaryFile:UploadableFile, listener:EventListenerObject):Promise<any> {
        //TODO: find a better way of doing this, and avoid promise and use observable instead.
        var token = this.token;
        return new Promise(function(reject, resolve){
            var data = new FormData();
            data.append("boundaryFile", boundaryFile.file);
            data.append("title", boundaryFile.title);
            data.append("tags", boundaryFile.tags.toString());

            var request = new XMLHttpRequest();
            request.onreadystatechange = function () {
                console.log(request.response);
            };
            request.upload.addEventListener('progress', listener, false);
            request.open("POST", BoundaryFileService.BASE_URL + "/upload/");
            request.setRequestHeader("authorization",token);
            request.send(data);
        });
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