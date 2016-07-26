import {Component} from '@angular/core';


@Component({
    selector: 'upload_boundary_file',
    template: require('./upload_boundary_file.component.jade'),
    styles: [`
        button{
            margin-left: 10px;
        }
        form{
            margin-left: 10px;
            margin-bottom: 10px;
        }
    `]
})


export class BoundaryFileComponent {
    uploadSelectedFile() {
        console.log("Upload clicked");
        (<HTMLFormElement>document.getElementById("file_selector")).submit();
    }

}