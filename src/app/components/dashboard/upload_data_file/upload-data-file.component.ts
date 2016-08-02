import {Component} from '@angular/core';
import {TagsInputComponent} from "../tags/tags.component";
import {DataFile} from "./data-file";
import {DataFileService} from "../../shared/data-file.service";

@Component({
    selector: 'upload-data-file',
    template: require('./upload_data_file.component.jade'),
    directives: [TagsInputComponent],
    providers: [DataFileService]
})

export class DataFileComponent {
    public tags:String[] = [];
    public name:String = '';
    public file:File;

    constructor(private dataFileService:DataFileService) {
    }

    uploadSelectedFile() {
        if (this.file) {
            var dataFile = new DataFile(this.name, this.file, this.tags);
            this.dataFileService.upload(dataFile);
        }
    }

    selectedFile(event:any) {
        this.file = event.target.files[0];
    }
}