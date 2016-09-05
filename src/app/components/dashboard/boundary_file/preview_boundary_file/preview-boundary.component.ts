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
    @Output() confirmation = new EventEmitter<boolean>();
    public mapId:string = 'previewMap';

    constructor(private loadMapService:LoadMapService) {
    }

    showModal(fileContent:string) {
        this.modal.show({inverted: true});
        this.loadMap(fileContent);
    }


    loadMap(fileContent:string) {
        this.loadMapService.loadMap(JSON.parse(fileContent), this.mapId);
    }

    confirmSelection() {
        this.modal.hide();
        this.confirmation.emit(true);
    }
}