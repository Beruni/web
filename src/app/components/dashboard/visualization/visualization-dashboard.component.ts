import {Component} from "@angular/core";
import {BoundaryFileService} from "../../../services/boundary-file.service";
import {Router} from "@angular/router";
import {LoadMapService} from "../../../services/load-map.service";

@Component({
    selector: 'visualization-boundary-file',
    template: require('./visualization-dashboard.component.jade'),
    providers: [BoundaryFileService, LoadMapService]
})

export class VisualizationDashBoardComponent {

    constructor(private boundaryFileService:BoundaryFileService,private loadMapService:LoadMapService, private router:Router) {
    }

    ngOnInit() {
        var query = this.router.url.split('/');
        var fileId = query[query.length - 1];
        this.boundaryFileService.fetchBoundaryFileById(fileId, (data:any) => {
            this.loadMapService.loadMap(JSON.parse(data));
        })
    }
}