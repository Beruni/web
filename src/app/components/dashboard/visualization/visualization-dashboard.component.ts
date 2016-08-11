import {Component, Input, ViewChild} from "@angular/core"
import {SemanticModalComponent} from "ng-semantic/ng-semantic";
import * as L from "leaflet"
@Component({
    selector: 'upload-visualization-modal',
    template: `
<head>
    <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css"/>
</head>

<div id="map" style="width: 80%;height: 80%"></div>`,
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