import {Component} from '@angular/core';
import {TagsInputComponent} from "./tags.component";
import {BoundaryFileComponent} from "./upload_boundary_file.component";

@Component({
    selector: 'dashboard',
    directives: [TagsInputComponent, BoundaryFileComponent],
    template: `<tags-input
    placeholder="Add an tag"
    [(ngModel)]="boundaryFile.tags"
    delimiterCode="188">
    </tags-input>
    <upload-boundary-file>
    </upload-boundary-file> `
})

export class DashboardComponent {
    public boundaryFile : {
        tags:any[]
    } = { tags:[]};
}