import * as L from "leaflet";
import * as _ from "lodash";

export class LoadMapService{
    private static  COLOR_ARRAY = ['#FFEDA0','#FED976','#FEB24C','#FD8D3C','#FC4E2A','#E31A1C','#BD0026','#800026'];
    private static RANGE:number;
    private maxData:number = 0;

    static getColor(data:number) {
        return LoadMapService.COLOR_ARRAY[Math.floor(data/LoadMapService.RANGE)];
    }

    style(feature:any):any{
        return {
            fillColor: LoadMapService.getColor(feature.properties.data),
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        };
    }


    loadMap(data:JSON, mapId:string = 'map'):void{
        var layer = L.geoJson(data);
        var center = layer.getBounds().getCenter();
        var map = L.map(mapId).setView(center).fitBounds(layer.getBounds());
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
        layer.addTo(map);
    }

    plotChoropleth(data:any, mapId:string = 'map') :void{
        LoadMapService.RANGE = this.findRange(data);
        var layer = L.geoJson(data, {style: this.style});
        var center = layer.getBounds().getCenter();
        var map = L.map(mapId).setView(center).fitBounds(layer.getBounds());
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
        layer.addTo(map);
    }

    private findRange(data:any) : number {
        var features = data.features;
        this.maxData = _.minBy(features,function (feature:any) {
            return feature.properties.data;
        }).properties.data;
        return this.maxData/LoadMapService.COLOR_ARRAY.length;
    }
}