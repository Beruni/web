import {Component, ViewChild, ChangeDetectionStrategy, Input} from "@angular/core";
import {BoundaryFileService} from "../../../services/boundary-file.service";
import {UploadModalComponent} from "../common/upload_modal/upload-modal.component";
import {LocalStorageService} from "../../../services/local.storage.service";
import {SearchPipe} from "../../../pipes/search.pipe";
import {PaginatePipe, PaginationControlsCmp, PaginationService} from "ng2-pagination";
import {UploadVisualization} from "../visualization/visualization-dashboard.component";
import {Router} from "@angular/router";

@Component({
    selector: 'view-upload-boundary-file',
    template: require('./boundary-file-dashboard.component.jade'),
    directives: [UploadModalComponent, PaginationControlsCmp, UploadVisualization],
    pipes: [SearchPipe, PaginatePipe],
    providers: [BoundaryFileService, LocalStorageService, PaginationService, UploadVisualization],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class BoundaryFileDashBoardComponent {
    @ViewChild(UploadModalComponent)
    uploadModal:UploadModalComponent;
    @ViewChild(UploadVisualization)
    uploadVisualizationModal:UploadVisualization;
    @Input('data') files:JSON = null;

    constructor(private boundaryFileService:BoundaryFileService, private router:Router) {

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

    openWindow() {
        this.router.navigate(['visualization-boundary-file']);
        // window.open('upload-visualization-modal')
    }

}