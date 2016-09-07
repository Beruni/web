import * as L from "leaflet";
import * as _ from "lodash";
import {InfoControlComponent} from "../components/cutstom/map-custom.component";
import any = jasmine.any;
export class LoadMapService{

    private static  COLOR_ARRAY = ['#FFEDA0','#FED976','#FEB24C','#FD8D3C','#FC4E2A','#E31A1C','#BD0026','#800026'];
    public static RANGE:number;
    public static MAX_VALUE:number = 0;

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
        L.tileLayer('//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
        layer.addTo(map);
    }

    plotChoropleth(data:any, mapId:string = 'map') :void{
        LoadMapService.RANGE = this.findRange(data);
        var layer = L.geoJson(data, {style: this.style});
        var center = layer.getBounds().getCenter();
        var map = L.map(mapId).setView(center).fitBounds(layer.getBounds());
        L.tileLayer('//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
        layer.addTo(map);
        map.addControl(new InfoControlComponent.InfoControl());
    }

    private findRange(data:any) : number {
        var features = data.features;
        LoadMapService.MAX_VALUE = _.minBy(features,function (feature:any) {
            return feature.properties.data;
        }).properties.data;
        return Math.floor(LoadMapService.MAX_VALUE/LoadMapService.COLOR_ARRAY.length);
    }
}