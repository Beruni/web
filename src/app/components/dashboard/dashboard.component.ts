import {Component} from '@angular/core';
import {Tags} from "./tags.component";
import {BoundaryFileComponent} from "./upload_boundary_file.component";

@Component({
    selector: 'dashboard',
    directives: [Tags, BoundaryFileComponent],
    template: ' <span tags></span> <upload_boundary_file></upload_boundary_file>'
})

export class DashboardComponent {

}