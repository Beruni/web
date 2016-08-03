import { Component } from '@angular/core';
import {TagsInputComponent} from "../common/tags/tags.component";
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";
import { BoundaryFileComponent } from "./upload-boundary-file.component";


@Component({
  selector: 'view-upload-boundary-file',
  template: require('./boundary-file-dashboard.component.jade'),
  directives: [BoundaryFileComponent, SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES, TagsInputComponent]
})

export class ViewBoundaryFileComponent{
  public boundaryFile:{
    tags:any[]
  } = {tags: []};
}