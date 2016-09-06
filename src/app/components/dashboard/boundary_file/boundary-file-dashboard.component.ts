import {Component, ViewChild, ChangeDetectionStrategy, Input, EventEmitter, Output} from "@angular/core";
import {BoundaryFileService} from "../../../services/boundary-file.service";
import {UploadModalComponent} from "../common/upload_modal/upload-modal.component";
import {LocalStorageService} from "../../../services/local.storage.service";
import {SearchPipe} from "../../../pipes/search.pipe";
import {PaginatePipe, PaginationControlsCmp, PaginationService} from "ng2-pagination";
import {PreviewBoundaryFileComponent} from "./preview_boundary_file/preview-boundary.component";

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

    @Input('boundary_files') files:JSON;

    @Output() selectedFileContent = new EventEmitter<string>();

    @ViewChild(PreviewBoundaryFileComponent)
    previewBoundaryFileComponent:PreviewBoundaryFileComponent;

    private fileContent:string;

    constructor(private boundaryFileService:BoundaryFileService) {

    }

    ngOnInit() {
        this.uploadModal.uploadService = this.boundaryFileService;
    }

    formattedDate(date:string) {
        var datString = new Date(date).toDateString();
        return datString.split(' ').slice(0, 4).join(' ');
    }

    showModal(event: any) {
        var fileId = event.path[1].cells[3].innerHTML;
        this.boundaryFileService.fetchBoundaryFileById(fileId, (data:any) => {
            this.fileContent = data;
            this.previewBoundaryFileComponent.showModal(this.fileContent);
        });
    }

    selectedBoundaryFile() {
        this.selectedFileContent.emit(this.fileContent);
    }

    currentBoundaryFile(fileContent:string){
        this.selectedFileContent.emit(fileContent)
    }

}