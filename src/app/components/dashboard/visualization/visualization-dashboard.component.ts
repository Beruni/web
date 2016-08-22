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

    constructor(private boundaryFileService:BoundaryFileService, private router:Router) {
    }

    ngOnInit() {
        var query = this.router.url.split('/');
        var fileId = query[query.length - 1];
        this.boundaryFileService.fetchBoundaryFileById(fileId, (data:any) => {
            this.loadMap(JSON.parse(data));
        })
    }

    loadMap(data:JSON) {
        var layer = L.geoJson(data);
        var center = layer.getBounds().getCenter();
        var map = L.map('map').setView(center).fitBounds(layer.getBounds());
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
        layer.addTo(map);
    }

}