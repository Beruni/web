import {Component, ViewChild, OnInit} from '@angular/core';
import {UploadModalComponent} from "../common/upload_modal/upload-modal.component";
import {DataFileService} from "../../../service/data-file.service";

@Component({
    selector: 'view-uploaded-data-file',
    template: require('./data-file-dashboard.component.jade'),
    directives: [UploadModalComponent],
    providers: [DataFileService]
})
export class ViewDataFileComponent implements OnInit {
    @ViewChild(UploadModalComponent)
    uploadModal:UploadModalComponent;

    constructor(private dataFileService:DataFileService) {
    }

    ngOnInit() {
        this.uploadModal.uploadService = this.dataFileService;
    }

}