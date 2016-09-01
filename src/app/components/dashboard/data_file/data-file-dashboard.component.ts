import {Component, ViewChild, OnInit, Input, ChangeDetectionStrategy} from "@angular/core";
import {UploadModalComponent} from "../common/upload_modal/upload-modal.component";
import {DataFileService} from "../../../services/data-file.service";
import {LocalStorageService} from "../../../services/local.storage.service";
import {PaginationService, PaginatePipe, PaginationControlsCmp} from "ng2-pagination/index";
import {SearchPipe} from "../../../pipes/search.pipe";
import {PreviewBoundaryFileComponent} from "../boundary_file/preview_boundary_file/preview-dashboard.component";
import {PreviewDataFileComponent} from "./preview_data_file/preview-data-file.component";

@Component({
    selector: 'view-upload-data-file',
    template: require('./data-file-dashboard.component.jade'),
    directives: [UploadModalComponent, PaginationControlsCmp, PreviewDataFileComponent],
    styles:[require('./data-file-dashboard.component.scss')],
    pipes: [SearchPipe, PaginatePipe],
    providers: [DataFileService, LocalStorageService, PaginationService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataFileDashboardComponent implements OnInit {
    @ViewChild(PreviewDataFileComponent)
    previewDataFileComponent:PreviewDataFileComponent;

    @ViewChild(UploadModalComponent)
    uploadModal:UploadModalComponent;

    @Input('data') files:JSON = null;

    constructor(private dataFileService:DataFileService) {

    }

    ngOnInit() {
        this.uploadModal.uploadService = this.dataFileService;
        this.dataFileService.fetchDataFiles((data:JSON) => {
            this.files = data;
        })
    }

    formattedDate(date:string) {
        var datString = new Date(date).toDateString();
        return datString.split(' ').slice(0, 4).join(' ');
    }

    openWindow(event: any) {
        var fileId = event.path[1].cells[3].innerHTML;
        this.previewDataFileComponent.showModal(fileId);
    }
}