import {Component} from '@angular/core';
import {BoundaryFileComponent} from "./upload_boundary_file/upload_boundary_file.component";
import {DataFileComponent} from "./upload_data_file/upload_data_file.component";

@Component({
    selector: 'dashboard',
    directives: [BoundaryFileComponent, DataFileComponent],
    template: require('./dashboard.component.jade'),
    styles: [require('./dashboard.component.scss')]
})

export class DashboardComponent {
}