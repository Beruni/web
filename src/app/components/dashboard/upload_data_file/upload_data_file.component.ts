import {Component} from '@angular/core';
import {TagsInputComponent} from "../tags/tags.component";
import {DataFile} from "./dataFile";
import {DataFileService} from "../../shared/data_file.service";

@Component({
    selector: 'upload-data-file',
    template: require('./upload_data_file.component.jade'),
    directives: [TagsInputComponent],
    providers: [DataFileService]
})

export class DataFileComponent {
    public dataFile:DataFile = new DataFile();

    constructor(
        private dataFileService:DataFileService){
    }

    uploadSelectedFile() {
        this.dataFileService.upload(this.dataFile);
    }

    selectedFile(event:any){
        this.dataFile.file = event.target.files[0];
    }
}