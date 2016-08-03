import { Component } from '@angular/core';
import {UploadModalComponent} from "../upload_modal/upload-modal.component";

@Component({
  selector: 'view-uploaded-data-file',
  template: require('./view_uploaded_data_file.component.jade'),
  directives: [UploadModalComponent]
})
export class ViewDataFileComponent {
}