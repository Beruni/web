import * as L from "leaflet";

export class LoadMapService{

    loadMap(data:JSON){
        var layer = L.geoJson(data);
        var center = layer.getBounds().getCenter();
        var map = L.map('map').setView(center).fitBounds(layer.getBounds());
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
        layer.addTo(map);
    }

}