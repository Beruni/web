import {Component} from '@angular/core';
import {TagsInputComponent} from "../tags/tags.component";
import {DataFile} from './dataFile.ts'

@Component({
    selector: 'upload-data-file',
    template: require('./upload_data_file.component.jade'),
    directives: [TagsInputComponent]
})

export class DataFileComponent {
    public dataFile:DataFile = new DataFile();
    uploadSelectedFile() {
        console.log(this.dataFile + " " + this.dataFile.tags);
    }
}