import {Component} from '@angular/core';
import {TagsInputComponent} from "../tags/tags.component";
import {DataFile} from "./dataFile";

@Component({
    selector: 'upload-data-file',
    template: require('./upload_data_file.component.jade'),
    directives: [TagsInputComponent]
})

export class DataFileComponent {
    public dataFile:DataFile = new DataFile();
    uploadSelectedFile() {
        console.log(this.dataFile);
        console.log(this.dataFile.file);
    }

    selectedFile(event:any){
        this.dataFile.file = event.target.files[0];
    }
}