import {Component, ViewChild} from "@angular/core";
import {BoundaryFileService} from "../../../service/boundary-file.service";
import {UploadModalComponent} from "../common/upload_modal/upload-modal.component";


@Component({
  selector: 'view-upload-boundary-file',
  template: require('./boundary-file-dashboard.component.jade'),
  directives: [UploadModalComponent],
  providers: [BoundaryFileService]
})

export class ViewBoundaryFileComponent{
  @ViewChild(UploadModalComponent)
  uploadModal:UploadModalComponent;

  constructor(private boundaryFileService:BoundaryFileService) {
  }

  ngOnInit() {
    this.uploadModal.uploadService = this.boundaryFileService;
  }
}