import {Injectable} from "@angular/core";
import "rxjs/add/operator/toPromise";
import {UploadService} from "./upload-interface";
import {UploadableFile} from "../components/dashboard/data_file/uploadable-file";

@Injectable()
export class BoundaryFileService implements UploadService{
    private baseURL:string = 'http://127.0.0.1:3000';
    upload(boundaryFile:UploadableFile, listener:EventListenerObject):Promise<any> {
        var data = new FormData();
        data.append("boundaryFile", boundaryFile.file);
        data.append("title", boundaryFile.title);
        data.append("tags", boundaryFile.tags.toString());

        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            console.log(request.response);
        };

        request.upload.addEventListener('progress', listener, false);
        request.open("POST", this.baseURL + "/upload/");
        request.send(data);
        return undefined;
    }

}