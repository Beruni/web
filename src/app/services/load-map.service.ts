import * as L from "leaflet";

export class LoadMapService{
    static getColor(d:any) {
        return d > 1000 ? '#800026' :
            d > 500  ? '#BD0026' :
                d > 200  ? '#E31A1C' :
                    d > 100  ? '#FC4E2A' :
                        d > 50   ? '#FD8D3C' :
                            d > 20   ? '#FEB24C' :
                                d > 10   ? '#FED976' :
                                    '#FFEDA0';
    }

    style(feature:any){
        return {
            fillColor: LoadMapService.getColor(feature.properties.data),
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        };
    }


    loadMap(data:JSON, mapId:string = 'map'){
        var layer = L.geoJson(data);
        var center = layer.getBounds().getCenter();
        var map = L.map(mapId).setView(center).fitBounds(layer.getBounds());
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
        layer.addTo(map);
    }

    plotChoropleth(data:JSON, mapId:string = 'map') {
        var layer = L.geoJson(data, { style: this.style });
        var center = layer.getBounds().getCenter();
        var map = L.map(mapId).setView(center).fitBounds(layer.getBounds());
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
        layer.addTo(map);
    }

}