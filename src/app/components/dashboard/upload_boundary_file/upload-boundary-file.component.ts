import {Component, Injectable} from "@angular/core";
import {TagsInputComponent} from "../tags/tags.component";

@Component({
    selector: 'upload-boundary-file',
    template: require('./upload_boundary_file.component.jade'),
    styles: [require('./upload-boundary-file.component.scss')],
    directives: [TagsInputComponent]
})

@Injectable()
export class BoundaryFileComponent {
    public boundaryFile:{
        tags:any[], title:string, fileName:File
    } = {tags: [], title: "", fileName: null};

    uploadSelectedFile() {
        var data = new FormData();
        data.append("boundaryFile", this.boundaryFile.fileName);
        data.append("title", this.boundaryFile.title);
        data.append("tags", this.boundaryFile.tags.toString());

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

    enableUploadButton() {
        this.boundaryFile.fileName = (<HTMLInputElement>document.getElementById("boundaryFile")).files[0];

        if (this.boundaryFile.fileName)
            (<HTMLButtonElement>document.getElementById('upload_button')).disabled = false;

    }

}