import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {DataFile} from "../dashboard/upload_data_file/dataFile";

@Injectable()
export class DataFileService {
    private baseURL:string = 'http://127.0.0.1:3010';
    constructor(private http: Http) { }

    upload(dataFile:DataFile):Promise<any> {
        console.log("Uploading file from service");
        let headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.baseURL + "/upload", JSON.stringify(dataFile.file.content), {headers:headers})
            .toPromise();
    }
}
