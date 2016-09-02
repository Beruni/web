import {Component, ViewChild} from "@angular/core";
import {BoundaryFileDashBoardComponent} from "./boundary_file/boundary-file-dashboard.component";
import {DataFileDashboardComponent} from "./data_file/data-file-dashboard.component";
import {HomeComponent} from "../home/home.component";
import {Visualization} from "./visualization/visualization.component";

@Component({
    selector: 'dashboard',
    template: require('./dashboard.component.jade'),
    styles: [require('./dashboard.component.scss')],
    directives: [BoundaryFileDashBoardComponent, DataFileDashboardComponent, Visualization, HomeComponent]
})

export class DashboardComponent {
    isBoundaryFileCompleted:boolean = false;
    isDataFileCompleted:boolean = false;
    private selectedBoundaryFileContent:string;
    private selectedDataFileContent:string;

    @ViewChild(Visualization)
    visualization:Visualization;

    selectedBoundaryFile(selectedFileContent:string) {
        this.selectedBoundaryFileContent = selectedFileContent;
        this.isBoundaryFileCompleted = true;
    }

    selectedDataFile(selectedFileContent:string) {
        this.selectedDataFileContent = selectedFileContent;
        this.isDataFileCompleted = true;
        this.plotChoropleth();
    }

    private plotChoropleth() {
        this.visualization.plotChoropleth(this.selectedBoundaryFileContent, this.selectedDataFileContent);
    }
}