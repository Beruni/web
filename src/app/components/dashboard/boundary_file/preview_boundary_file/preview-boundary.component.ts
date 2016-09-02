import {Component, ViewChild, EventEmitter, Output} from "@angular/core";
import {LoadMapService} from "../../../../services/load-map.service";
import {SemanticModalComponent} from "ng-semantic/ng-semantic";

@Component({
    selector: 'preview-boundary-file',
    template: require('./preview-boundary.component.jade'),
    styles: [require('./preview-boundary.component.scss')],
    providers: [LoadMapService],
    directives: [SemanticModalComponent]
})

export class PreviewBoundaryFileComponent {
    @ViewChild(SemanticModalComponent)
    private modal:SemanticModalComponent;
    public showMap:boolean = true;
    @Output() confirmation = new EventEmitter<boolean>();

    constructor(private loadMapService:LoadMapService) {
    }

    showModal(fileContent: string) {
        this.showMap = true;
        this.modal.show({inverted: true});
        this.loadMap(fileContent);
    }


    loadMap(fileContent: string) {
        this.loadMapService.loadMap(JSON.parse(fileContent));
    }

    confirmSelection() {
        this.modal.hide();
        this.showMap = false;
        this.confirmation.emit(true);
    }
}