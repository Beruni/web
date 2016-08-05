import {Component, ViewChild} from "@angular/core";
import {BoundaryFileService} from "../../../service/boundary-file.service";
import {UploadModalComponent} from "../common/upload_modal/upload-modal.component";
import {LocalStorageService} from "../../../service/local.storage.service";

@Component({
  selector: 'view-upload-boundary-file',
  template: require('./boundary-file-dashboard.component.jade'),
  directives: [UploadModalComponent],
  providers: [BoundaryFileService, LocalStorageService]
})

export class ViewBoundaryFileComponent{
  @ViewChild(UploadModalComponent)
  uploadModal:UploadModalComponent;

  constructor(private boundaryFileService:BoundaryFileService) {
  }

  ngOnInit() {
    this.uploadModal.uploadService = this.boundaryFileService;
    this.fetchBoundaryFiles();
  }

  fetchBoundaryFiles(){
    this.boundaryFileService.fetchBoundaryFiles()
  }
}