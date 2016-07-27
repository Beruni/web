import { Component } from '@angular/core';
import {TagsInputComponent} from "../tags/tags.component";

@Component({
    selector: 'upload-data-file',
    template: require('./upload_data_file.component.jade'),
    directives: [TagsInputComponent]
})

export class DataFileComponent {
    public dataFile : {
        tags:any[]
    } = { tags:[]};

    uploadSelectedFile() {
        console.log('test');
    }
}