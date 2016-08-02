import {Component} from '@angular/core';
import {TagsInputComponent} from "../tags/tags.component";
import {Response} from '@angular/http'
@Component({
    selector: 'upload-boundary-file',
    template: require('./upload_boundary_file.component.jade'),
    styles: [`
        button{
            margin-left: 10px;
        }
        form{
            margin-left: 10px;
            margin-bottom: 10px;
        }
    `],
    directives: [TagsInputComponent]
})


export class BoundaryFileComponent {
    public boundaryFile:{
        tags:any[], title:string
    } = {tags: [], title: ""};

    uploadSelectedFile() {

        var fileName = (<HTMLInputElement>document.getElementById("boundaryFile")).files[0];

        var data = new FormData();
        data.append("boundaryFile", fileName);
        data.append("title", this.boundaryFile.title);
        data.append("tags", this.boundaryFile.tags.toString());

        var request = new XMLHttpRequest();

        request.onreadystatechange = function () {
            console.log(request.response);
        };
        request.upload.addEventListener('progress', function (e:ProgressEvent) {
            var progressbar = document.getElementById("progressbar");
            var progressbarContainer = document.getElementById("progressbarContainer");
            var uploadPercentage = Math.ceil(e.loaded / e.total * 100);
            if (uploadPercentage) {
                progressbarContainer.style.display = "block";
                progressbar.style.width = uploadPercentage + '%';
            }
        }, false);
        request.open("POST", "http://127.0.0.1:3000/upload/");
        request.send(data);

    }

}