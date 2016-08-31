import {Component, ViewChild, EventEmitter, Output} from "@angular/core";
import {BoundaryFileService} from "../../../../services/boundary-file.service";
import {Router, ROUTER_DIRECTIVES} from "@angular/router";
import {LoadMapService} from "../../../../services/load-map.service";
import {SemanticModalComponent} from "ng-semantic/ng-semantic";

@Component({
    selector: 'preview-boundary-file',
    template: require('./preview-dashboard.component.jade'),
    styles: [require('./preview-dashboard.component.scss')],
    providers: [BoundaryFileService, LoadMapService],
    directives: [ROUTER_DIRECTIVES, SemanticModalComponent]
})

export class PreviewBoundaryFileComponent {
    @Output() selectedBoundaryFile = new EventEmitter<string>();

    private fileId: string;

    @ViewChild(SemanticModalComponent)
    private modal:SemanticModalComponent;
    public showMap:boolean = false;

    constructor(private boundaryFileService:BoundaryFileService, private loadMapService:LoadMapService, private router:Router) {
    }

    showModal(fileId:string) {
        this.fileId = fileId;
        this.showMap = true;
        this.modal.show({inverted: true});
        this.loadMap(fileId);
    }

    loadMap(fileId:any) {
        this.boundaryFileService.fetchBoundaryFileById(fileId, (data:any) => {
            this.loadMapService.loadMap(JSON.parse(data));
        });
    }

    confirmSelection() {
        this.showMap = false;
        this.modal.hide();
        this.selectedBoundaryFile.emit(this.fileId);
    }
}