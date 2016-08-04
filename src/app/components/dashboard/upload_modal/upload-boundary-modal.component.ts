import {Component, Injectable, ViewChild} from "@angular/core";
import {TagsInputComponent} from "../common/tags/tags.component";
import {BoundaryFileService} from "../../shared/BoundaryFileService";
import {SemanticModalComponent} from "ng-semantic/ng-semantic";

@Component({
    selector: 'upload-boundary-modal',
    template: require('./upload-boundary-modal.component.jade'),
    styles: [require('./upload-boundary-file.component.scss')],
    directives: [TagsInputComponent, SemanticModalComponent],
    providers:[BoundaryFileService]
})

@Injectable()
export class UploadBoundaryFileComponent {

    public boundaryFile:{
        tags:any[], title:string, fileName:File
    } = {tags: [], title: "", fileName: null};

    @ViewChild(SemanticModalComponent)
    private modal:SemanticModalComponent;


    constructor(private boundaryFileService:BoundaryFileService) {
    }

    showModal(){
        this.modal.show({inverted: true})
    }

    uploadSelectedFile() {
        this.boundaryFileService.uploadSelectedFile(this.boundaryFile);
    }

    selectedFile(event:any) {
        this.boundaryFile.fileName = event.target.files[0];
        (<HTMLButtonElement>document.getElementById('upload_button')).disabled = false;
    }

}