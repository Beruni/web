import {Component} from "@angular/core";
import {BoundaryFileDashBoardComponent} from "./boundary_file/boundary-file-dashboard.component";
import {DataFileDashboardComponent} from "./data_file/data-file-dashboard.component";
import {HomeComponent} from "../home/home.component";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    selector: 'dashboard',
    template: require('./dashboard.component.jade'),
    styles: [require('./dashboard.component.scss')],
    directives: [BoundaryFileDashBoardComponent, DataFileDashboardComponent, HomeComponent, ROUTER_DIRECTIVES]
})

export class DashboardComponent {
    isOnBoundaryFile = true;
    isOnVisualization = false;
    isOnDataFile = false;

    tabNumber: number = 0; 
    onSelectBoundaryFile() {
        this.disableAllActiveTabs();
        this.isOnBoundaryFile = true;
        this.tabNumber = 0
    }
    disableAllActiveTabs(){
        this.isOnBoundaryFile = this.isOnDataFile = this.isOnVisualization = false;
    }
    onSelectDataFile(){
        this.disableAllActiveTabs();
        this.isOnDataFile = true;
        this.tabNumber = 1
    }
    onVisualization(){
        this.disableAllActiveTabs();
        this.isOnVisualization = true;
        this.tabNumber = 2
    }
    checkCurrentTab(){
        return this.tabNumber;
    }
}