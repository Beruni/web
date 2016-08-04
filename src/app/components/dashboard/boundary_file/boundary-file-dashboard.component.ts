import {Component, ViewChild} from "@angular/core";
import {TagsInputComponent} from "../common/tags/tags.component";
import {SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES} from "ng-semantic";
import { UploadBoundaryFileComponent } from '../upload_modal/upload-boundary-modal.component'


@Component({
  selector: 'view-upload-boundary-file',
  template: require('./boundary-file-dashboard.component.jade'),
  directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES, TagsInputComponent, UploadBoundaryFileComponent]
})

export class ViewBoundaryFileComponent{
  public boundaryFile:{
    tags:any[]
  } = {tags: []};

  @ViewChild(UploadBoundaryFileComponent) uploadBoundaryFileComponent : UploadBoundaryFileComponent;

  constructor() { }

  showModal(){
    this.uploadBoundaryFileComponent.showModal();
  }

}