import {Component} from "@angular/core";
import {BoundaryFileDashBoardComponent} from "./boundary_file/boundary-file-dashboard.component";
import {DataFileDashboardComponent} from "./data_file/data-file-dashboard.component";
import {HomeComponent} from "../home/home.component";
import {ROUTER_DIRECTIVES, Router} from "@angular/router";
import {Visualization} from "./visualization/visualization.component";

@Component({
    selector: 'dashboard',
    template: require('./dashboard.component.jade'),
    styles: [require('./dashboard.component.scss')],
    directives: [BoundaryFileDashBoardComponent, DataFileDashboardComponent,Visualization, HomeComponent]
})

export class DashboardComponent {
    isBoundaryFileCompleted:boolean = false;
    isDataFileCompleted:boolean = false;
    private selectedBoundaryFileContent:string;
    private selectedDataFileContent:string;

    selectedBoundaryFile(selectedBoundaryFileContent: string){
        this.selectedBoundaryFileContent = selectedBoundaryFileContent;
        this.isBoundaryFileCompleted = true;
    }

    selectedDataFile(selectedDataFileContent: string){
        this.selectedDataFileContent = selectedDataFileContent;
        this.isDataFileCompleted = true;
    }
}