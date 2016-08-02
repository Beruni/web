import {Component} from '@angular/core';

import {ViewBoundaryFileComponent} from "./upload_boundary_file/view_uploaded_boundary_file.component";
import {ViewDataFileComponent} from "./upload_data_file/view_uploaded_data_file.component";

@Component({
    selector: 'dashboard',
    template: require('./dashboard.component.jade'),
    styles: [require('./dashboard.component.scss')],
    directives: [ViewBoundaryFileComponent, ViewDataFileComponent]
})

export class DashboardComponent {
    tabNumber: number = 0; 
    onSelectBoundaryFile() {
         this.tabNumber = 0
    }
    onSelectDataFile(){
        this.tabNumber = 1
    }
    onVisualization(){
        this.tabNumber = 2
    }
    checkCurrentTab(){
        return this.tabNumber;
    }
}