import {Component} from '@angular/core';
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";

import {BoundaryFileComponent} from "./upload_boundary_file/upload-boundary-file.component";
import {DataFileComponent} from "./upload_data_file/upload_data_file.component";

@Component({
    selector: 'dashboard',
    directives: [BoundaryFileComponent, DataFileComponent, SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],
    template: require('./dashboard.component.jade'),
    styles: [require('./dashboard.component.scss')]
})

export class DashboardComponent {
}