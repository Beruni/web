import {Component, ViewChild, Input} from "@angular/core";
import {TagsInputComponent} from "../tags/tags.component";
import {DataFileService} from "../../../shared/data-file.service";
import {SemanticModalComponent} from "ng-semantic/ng-semantic";
import {DataFile} from "../../data_file/data-file";

@Component({
    selector: 'upload-modal',
    template: require('./upload-modal.component.jade'),
    directives: [TagsInputComponent, SemanticModalComponent],
    providers: [DataFileService]
})

export class UploadModalComponent {

    @ViewChild(SemanticModalComponent)
    private modal:SemanticModalComponent;
    @Input() title:String;
    @Input() uploadFilePlaceholder:String;
    @Input() supportedFormats:String;

    public tags:String[] = [];
    public name:String = '';
    public file:File;

    constructor(private dataFileService:DataFileService) {
    }

    showModal(){
        this.modal.show({inverted: true})
    }

    uploadSelectedFile() {
        if (this.file) {
            var dataFile = new DataFile(this.name, this.file, this.tags);
            this.dataFileService.upload(dataFile);
        }
    }

    selectedFile(event:any) {
        this.file = event.target.files[0];
    }
}