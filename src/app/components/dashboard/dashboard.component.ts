import {Component} from '@angular/core';
import {BoundaryFileComponent} from "./upload_boundary_file/upload_boundary_file.component";
import {DataFileComponent} from "./upload_data_file/upload_data_file.component";

@Component({
    selector: 'dashboard',
    directives: [BoundaryFileComponent, DataFileComponent],
    template: `
    <upload-boundary-file></upload-boundary-file>
    <upload-data-file></upload-data-file>
`
})

export class DashboardComponent {
}