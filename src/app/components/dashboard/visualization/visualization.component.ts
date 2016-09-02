import {Component} from "@angular/core";
import {LoadMapService} from "../../../services/load-map.service";
import * as _ from "lodash";

@Component({
    selector:'visualization',
    template:require('./visualization.component.jade'),
    styles:[require('./visualization.component.scss')],
    providers:[LoadMapService]
})

export class Visualization{

    constructor(private loadMapService:LoadMapService){}

    plotChoropleth(selectedBoundaryFileContent:string, selectedDataFileContent:string) {
        var boundary = JSON.parse(selectedBoundaryFileContent);
        var data = JSON.parse(selectedDataFileContent);
        var features = boundary.features;

        _.forEach(data,function (featureData:any) {
            var location = _.valuesIn(featureData)[0];
            var density = _.valuesIn(featureData)[1];
            _.forEach(features,function(feature){
                _.mapValues(feature.properties,function(value){
                    if(value == location){
                        feature.properties['density'] = density;
                    }
                })
            })
        });
        this.loadMapService.loadMap(boundary);
    }
}