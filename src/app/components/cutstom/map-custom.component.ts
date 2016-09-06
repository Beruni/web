import {Component, Injectable} from "@angular/core";
import {LoadMapService} from "../../services/load-map.service";

@Component({
    providers:[LoadMapService]
})
@Injectable()
export class InfoControlComponent{

    public static InfoControl =  L.Control.extend({
        options: {
            position: 'topright'
        },

        onAdd: function () {
            var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
            container.style.width = '100px';
            container.style.backgroundColor = 'white';
            return InfoControlComponent.SetInfo(container);
        }
    });

    private static SetInfo(container:any) : any{
        var max = LoadMapService.MAX_VALUE;
        var range = LoadMapService.RANGE;
        var min:number = 0;
        while (min < max){
            var state = min + range;
            var color = LoadMapService.getColor(min + 1);
            container.innerHTML  += '<i style="background:'+ color +'"></i> ' + (min + 1) + (state ? '&ndash;' + state + '<br>' : '+');
            min = state;
        }
        return container;
    }
}