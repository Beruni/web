import {Injectable} from "@angular/core";
import "rxjs/add/operator/toPromise";
import {UploadService} from "./upload-interface";
import {UploadableFile} from "../components/dashboard/data_file/uploadable-file";
import {Http, Headers, RequestOptions} from "@angular/http";
import {LocalStorageService} from "./local.storage.service";

@Injectable()
export class DataFileService implements UploadService {
    //TODO: move it to a separate constant file/class.
    private static BASE_URL:string = 'http://127.0.0.1:3002';
    private token:string;
    private request:XMLHttpRequest;

    constructor(private http:Http, private localStorageService:LocalStorageService) {
        this.token = this.localStorageService.getUserToken();
    }

    upload(dataFile:UploadableFile, callback:Function):any {
        var data = new FormData();
        data.append("dataFile", dataFile.file);
        data.append("title", dataFile.title);
        data.append("tags", dataFile.tags.toString());
        var requestReference = this.request;
        this.request.onreadystatechange = function () {
            console.log(requestReference.response);
            switch(requestReference.status){
                case 406:
                    callback(false, "Invalid file format failed to upload");
                    break;
                case 200:
                    callback(true, "file is successfully uploaded");
                    break;
                case 500:
                    callback(false, "Server error")
                    break;
            }
        };

        this.request.send(data);
    }


    init():UploadService {
        this.request = new XMLHttpRequest();
        this.request.open("POST", DataFileService.BASE_URL + "/upload/");
        this.request.setRequestHeader("authorization", this.token);
        return this;
    }

    attachListener(event:string, listener:EventListenerObject):UploadService {
        this.request.upload.addEventListener(event, listener, false);
        return this;
    }

    fetchDataFiles(callback:any) {
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': this.token
        });
        let options = new RequestOptions({headers: headers});

        this.http.get(DataFileService.BASE_URL + "/fetchFiles", options)
            .map(res => res.json())
            .subscribe(data => callback(data));
    }
}