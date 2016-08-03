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
        this.removeActiveClassed()
        $("#boundary-file").addClass("active");
        this.tabNumber = 0
    }
    removeActiveClassed(){
        $("#boundary-file").removeClass("active");
        $("#data-file").removeClass("active");
        $("#visualization").removeClass("active");
    }
    onSelectDataFile(){
        this.removeActiveClassed()
        $("#data-file").addClass("active");
        this.tabNumber = 1
    }
    onVisualization(id:string){
        this.removeActiveClassed()
        $("#visualization").addClass("active");
        this.tabNumber = 2
    }
    checkCurrentTab(){
        return this.tabNumber;
    }
}