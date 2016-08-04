import {Injectable} from "@angular/core";
import "rxjs/add/operator/toPromise";

@Injectable()
export class BoundaryFileService {

    uploadSelectedFile(boundaryFile:any) {
        var data = new FormData();
        data.append("boundaryFile", boundaryFile.fileName);
        data.append("title", boundaryFile.title);
        data.append("tags", boundaryFile.tags.toString());

        var request = new XMLHttpRequest();

        request.onreadystatechange = function () {
            console.log(request.response);
        };

        request.upload.addEventListener('progress', function (e:ProgressEvent) {
            var progressbar = document.getElementById("progressbar");
            var progressbarContainer = document.getElementById("progressbarContainer");
            var status = document.getElementById("status");
            var uploadPercentage = Math.ceil(e.loaded / e.total * 100);
            if (uploadPercentage) {
                progressbarContainer.style.display = "block";
                progressbar.style.width = uploadPercentage + '%';
                status.innerHTML = uploadPercentage + '%';
            }
        }, false);
        request.open("POST", "http://127.0.0.1:3000/upload/");
        request.send(data);
    }
}