import {Component, ViewChild} from "@angular/core";
import {BoundaryFileService} from "../../../services/boundary-file.service";
import {UploadModalComponent} from "../common/upload_modal/upload-modal.component";
import {LocalStorageService} from "../../../services/local.storage.service";

@Component({
  selector: 'view-upload-boundary-file',
  template: require('./boundary-file-dashboard.component.jade'),
  directives: [UploadModalComponent],
  providers: [BoundaryFileService, LocalStorageService]
})

export class ViewBoundaryFileComponent{
  @ViewChild(UploadModalComponent)
  uploadModal:UploadModalComponent;

  files:JSON = null;

  constructor(private boundaryFileService:BoundaryFileService) {

  }

  ngOnInit() {
    this.uploadModal.uploadService = this.boundaryFileService;
    this.boundaryFileService.fetchBoundaryFiles((data:JSON) => {
      this.files = data;
    })
  }

  formattedDate(date:string){
    var datString = new Date(date).toDateString();
    return datString.split(' ').slice(0, 4).join(' ');
  }

}