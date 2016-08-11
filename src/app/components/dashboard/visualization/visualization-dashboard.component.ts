import {Component, Input, ViewChild} from "@angular/core"
import {SemanticModalComponent} from "ng-semantic/ng-semantic";
import * as L from "leaflet"
@Component({
    selector: 'upload-visualization-modal',
    template: require('./visualization-dashboard.component.jade'),
    directives: [SemanticModalComponent]
})

export class UploadVisualization {
    @ViewChild(SemanticModalComponent)
    private modal:SemanticModalComponent;

    ngOnInit() {
        this.loadMap();
    }

    loadMap() {
        var map = L.map('map').setView([42.35, -71.08], 13);
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    }

    //
    // showModal() {
    //     this.modal.show();
    // }
}