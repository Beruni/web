import {Component} from "@angular/core";
import {BoundaryFileService} from "../../../../services/boundary-file.service";
import {Router} from "@angular/router";
import {LoadMapService} from "../../../../services/load-map.service";

@Component({
    selector: 'preview-boundary-file',
    template: require('./preview-dashboard.component.jade'),
    providers: [BoundaryFileService, LoadMapService]
})

export class PreviewBoundaryFileComponent {

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