import { Component } from '@angular/core';
import {UploadModalComponent} from "../common/upload_modal/upload-modal.component";

@Component({
  selector: 'view-uploaded-data-file',
  template: require('./data-file-dashboard.component.jade'),
  directives: [UploadModalComponent]
})
export class ViewDataFileComponent {
}