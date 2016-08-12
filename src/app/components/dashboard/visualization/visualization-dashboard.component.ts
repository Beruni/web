import {Component} from "@angular/core";
import * as L from "leaflet";
import {BoundaryFileService} from "../../../services/boundary-file.service";
import {Router} from "@angular/router";

@Component({
    selector: 'visualization-boundary-file',
    template: require('./visualization-dashboard.component.jade'),
    providers: [BoundaryFileService]
})

export class VisualizationDashBoardComponent {

    constructor(private boundaryFileService: BoundaryFileService,private router: Router){}

    ngOnInit() {
        var query = this.router.url.split('/');
        var fileId = query[query.length - 1];
        this.boundaryFileService.fetchBoundaryFileById(fileId, (data:JSON) => {
            //TODO: populate this json to map
            console.log(data);
        })
        this.loadMap();
    }

    loadMap() {
        var map = L.map('map').setView([42.35, -71.08], 13);
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    }

}