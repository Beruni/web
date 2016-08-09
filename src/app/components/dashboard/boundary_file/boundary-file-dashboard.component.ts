import {Component, ViewChild, ChangeDetectionStrategy, Input} from "@angular/core";
import {BoundaryFileService} from "../../../services/boundary-file.service";
import {UploadModalComponent} from "../common/upload_modal/upload-modal.component";
import {LocalStorageService} from "../../../services/local.storage.service";
import {SearchPipe} from "../../../pipes/search.pipe";
import {PaginatePipe, PaginationControlsCmp, PaginationService} from 'ng2-pagination';

@Component({
  selector: 'view-upload-boundary-file',
  template: require('./boundary-file-dashboard.component.jade'),
  directives: [UploadModalComponent, PaginationControlsCmp],
  pipes: [SearchPipe, PaginatePipe],
  providers: [BoundaryFileService, LocalStorageService, PaginationService],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ViewBoundaryFileComponent {
    @ViewChild(UploadModalComponent)
    uploadModal:UploadModalComponent;
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

}