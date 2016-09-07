import {Component, Injectable} from "@angular/core";
import {LoadMapService} from "../../services/load-map.service";

@Component({
    providers: [LoadMapService]
})
@Injectable()
export class InfoControlComponent {

    public static InfoControl = L.Control.extend({
        options: {
            position: 'topright'
        },

        onAdd: function () {
            var container = L.DomUtil.create('div', 'legend');
            container.style.width = '127%';
            container.style.textAlign = 'left';
            container.style.paddingLeft = '5px'
            container.style.backgroundColor = 'white';
            return InfoControlComponent.SetInfo(container);
        }
    });

    private static SetInfo(container:any):any {
        var max = LoadMapService.MAX_VALUE;
        var range = LoadMapService.RANGE;
        var min:number = 0;
        do{
            var singleRangeValue = min + range;
            var color = LoadMapService.getColor(min + 1);
            container.innerHTML += InfoControlComponent.getInfoWithStyle(min,color) + (min + 1) + InfoControlComponent.getSingleRange(singleRangeValue);
            min = singleRangeValue;
        }while(min < max);
        return container;
    }

    private static getSingleRange(singleRangeValue:number):string{
        return (singleRangeValue ? '&ndash;' + singleRangeValue + '<br>' : '+');
    }

    private static getInfoWithStyle(min:number,color:any) {
       return '<i id=' + min + ', style="background:' + color + '; width: 18px;  height: 18px; padding-left: 21%; margin-right: 2%; opacity: 0.7; text-align: left;"></i>';
    }
}