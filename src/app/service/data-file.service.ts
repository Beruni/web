import {Injectable} from "@angular/core";
import "rxjs/add/operator/toPromise";
import {UploadableFile} from "../components/dashboard/data_file/uploadable-file";
import {UploadService} from "./upload-interface"

@Injectable()
export class DataFileService implements UploadService{
    private static BASE_URL:string = 'http://127.0.0.1:3010';

    upload(dataFile:UploadableFile, listener:EventListenerObject):Promise<any> {
        return new Promise(function(reject, resolve) {
            var formData = new FormData();
            formData.append("data_file", dataFile.file, "some_file");
            formData.append("file_title", dataFile.title);
            formData.append("tags", dataFile.tags);

            var request = new XMLHttpRequest();
            request.onreadystatechange = function () {
                console.log(request.response);
            };

            request.upload.addEventListener('progress', listener, false);
            request.open("POST", DataFileService.BASE_URL + '/upload/');
            request.send(formData);
        });
    }

}
