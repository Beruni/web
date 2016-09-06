import * as L from "leaflet";
import * as _ from "lodash";

export class LoadMapService{
    private static  COLOR_ARRAY = ['#FFEDA0','#FED976','#FEB24C','#FD8D3C','#FC4E2A','#E31A1C','#BD0026','#800026'];
    private static RANGE:number;

    static getColor(data:number) {
        return LoadMapService.COLOR_ARRAY[Math.floor(data/LoadMapService.RANGE)/2];
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

    plotChoropleth(data:any, mapId:string = 'map') {
        LoadMapService.RANGE = this.findRange(data);
        var layer = L.geoJson(data, {style: this.style});
        var center = layer.getBounds().getCenter();
        var map = L.map(mapId).setView(center).fitBounds(layer.getBounds());
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
        layer.addTo(map);
    }

    private findRange(data:any) : number {
        var features = data.features;
        var max : number = null, min : number = null;
        _.forEach(features,function(feature:any) {
            var data = feature.properties.data;
            max =  data > max ? data : max;
            min = data < min ? data : min;
        });
        return (max - min)/LoadMapService.COLOR_ARRAY.length;
    }
}