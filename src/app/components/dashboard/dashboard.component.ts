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
    directives: [BoundaryFileDashBoardComponent, DataFileDashboardComponent, Visualization, HomeComponent, ROUTER_DIRECTIVES]
})

export class DashboardComponent {

    constructor(private route:Router){

    }

    isBoundaryFileCompleted:boolean = false;

    selectBoundaryFile(){
        this.isBoundaryFileCompleted = true;
    }

    selectDataFile(){
       this.route.navigate(['data-files'])
    }

}