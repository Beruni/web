import {Component, ViewChild} from "@angular/core";
import {BoundaryFileService} from "../../../../services/boundary-file.service";
import {Router, ROUTER_DIRECTIVES} from "@angular/router";
import {LoadMapService} from "../../../../services/load-map.service";
import {SemanticModalComponent} from "ng-semantic/ng-semantic";

@Component({
    selector: 'preview-boundary-file',
    template: require('./preview-dashboard.component.jade'),
    styles:[require('./preview-dashboard.component.scss')],
    providers: [BoundaryFileService, LoadMapService],
    directives:[ROUTER_DIRECTIVES, SemanticModalComponent]
})

export class PreviewBoundaryFileComponent {

    @ViewChild(SemanticModalComponent)
    private modal:SemanticModalComponent;

    constructor(private boundaryFileService:BoundaryFileService,private loadMapService:LoadMapService, private router:Router) {
    }

    showModal(fileId:string){
        this.loadMap(fileId);
        console.log(1);
        var modal = this.modal;
        setTimeout(function () {
            modal.show({inverted:true});
        },1000)
    }

    loadMap(fileId:string) {
        // var query = this.router.url.split('/');
        // var fileId = query[query.length - 1];
        console.log("|" + fileId + "|");
        this.boundaryFileService.fetchBoundaryFileById(fileId, (data:any) => {
            this.loadMapService.loadMap(JSON.parse(data));
        });
    }
}