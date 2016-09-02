import * as L from "leaflet";

export class LoadMapService{

    style(feature:any){
        // TODO: need to implement getcolor method for color according density
        return {
            fillColor: '#800026',
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        };
    }


    loadMap(data:JSON){
        var layer = L.geoJson(data);
        var center = layer.getBounds().getCenter();
        var map = L.map('map').setView(center).fitBounds(layer.getBounds());
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
        layer.addTo(map);
    }

    plotChoropleth(data:JSON) {
        var layer = L.geoJson(data, { style: this.style });
        var center = layer.getBounds().getCenter();
        var map = L.map('map').setView(center).fitBounds(layer.getBounds());
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
        layer.addTo(map);
    }

}