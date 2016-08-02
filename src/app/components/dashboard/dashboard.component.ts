import {Component} from '@angular/core';
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";

import {BoundaryFileComponent} from "./upload_boundary_file/upload-boundary-file.component";
import {DataFileComponent} from "./upload_data_file/upload-data-file.component";
import {UploadModalComponent} from "./upload_modal/upload-modal.component";

@Component({
    selector: 'dashboard',
    template: require('./dashboard.component.jade'),
    styles: [require('./dashboard.component.scss')],
    directives: [BoundaryFileComponent, DataFileComponent, UploadModalComponent, SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES]
})

export class DashboardComponent {
}