import {Component, ViewChild, ChangeDetectionStrategy, Input} from "@angular/core";
import {BoundaryFileService} from "../../../services/boundary-file.service";
import {UploadModalComponent} from "../common/upload_modal/upload-modal.component";
import {LocalStorageService} from "../../../services/local.storage.service";
import {SearchPipe} from "../../../pipes/search.pipe";
import {PaginatePipe, PaginationControlsCmp, PaginationService} from "ng2-pagination";
import {Router} from "@angular/router";
import {PreviewBoundaryFileComponent} from "./preview_boundary_file/preview-dashboard.component";

@Component({
    selector: 'view-upload-boundary-file',
    template: require('./boundary-file-dashboard.component.jade'),
    styles:[require('./boundary-file-dashboard.component.scss')],
    directives: [UploadModalComponent, PaginationControlsCmp, PreviewBoundaryFileComponent],
    pipes: [SearchPipe, PaginatePipe],
    providers: [BoundaryFileService, LocalStorageService, PaginationService],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class BoundaryFileDashBoardComponent {
    @ViewChild(UploadModalComponent)
    uploadModal:UploadModalComponent;

    @ViewChild(PreviewBoundaryFileComponent)
    previewBoundaryFileComponent:PreviewBoundaryFileComponent;

    @Input('data') files:JSON = null;

    constructor(private boundaryFileService:BoundaryFileService) {

    }

    ngOnInit() {
        this.uploadModal.uploadService = this.boundaryFileService;
        this.boundaryFileService.fetchBoundaryFiles((data:JSON) => {
            this.files = data;
        })
    }

    formattedDate(date:string) {
        var datString = new Date(date).toDateString();
        return datString.split(' ').slice(0, 4).join(' ');
    }

    openWindow(event: any) {
        var fileId = event.path[1].cells[3].innerHTML;
        this.previewBoundaryFileComponent.showModal(fileId);
    }
}