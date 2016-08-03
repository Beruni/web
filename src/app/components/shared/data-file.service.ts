import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {DataFile} from "../dashboard/data_file/data-file";

@Injectable()
export class DataFileService {
    private baseURL:string = 'http://127.0.0.1:3010';

    constructor(private http:Http) {
    }

    upload(dataFile:DataFile):Promise<any> {
        console.log("Uploading file from service");
        var formData = new FormData();
        formData.append("data_file", dataFile.file, "some_file");
        formData.append("file_title", dataFile.title);
        formData.append("tags", dataFile.tags);
        let headers = new Headers();
        return this.http.post(this.baseURL + "/upload", formData, {headers: headers})
            .toPromise();
    }
}
