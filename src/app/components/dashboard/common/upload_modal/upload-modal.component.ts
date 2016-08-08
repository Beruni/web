import {Component, ViewChild, Input} from "@angular/core";
import {TagsInputComponent} from "../tags/tags.component";
import {DataFileService} from "../../../../service/data-file.service";
import {SemanticModalComponent} from "ng-semantic/ng-semantic";
import {UploadableFile} from "../../data_file/uploadable-file";
import {UploadService} from "../../../../service/upload-interface";
import {BoundaryFileService} from "../../../../service/boundary-file.service";

@Component({
    selector: 'upload-modal',
    template: require('./upload-modal.component.jade'),
    styles: [require('./upload-modal.component.scss')],
    directives: [TagsInputComponent, SemanticModalComponent],
    providers: [DataFileService,BoundaryFileService]
})

export class UploadModalComponent implements EventListenerObject {

    @ViewChild(SemanticModalComponent)
    private modal:SemanticModalComponent;
    @Input() title:String;
    @Input() uploadFilePlaceholder:String;
    @Input() formats:String;

    @Input() supportedFormats:String;
    public tags:String[] = [];
    public name:String = '';
    public file:File;
    public uploadService:UploadService;

    showModal() {
        this.modal.show({inverted: true})
    }

    hideModal() {
        this.modal.hide()
    }

    uploadSelectedFile() {
        if (this.file) {
            var file = new UploadableFile(this.name, this.file, this.tags);
            this.uploadService.upload(file, this).then(function (e) {
                console.log('success');
            }, function (e) {
                console.log('error' + e);
            });
        }
    }

    selectedFile(event:any) {
        this.file = event.target.files[0];
    }

    handleEvent(event:ProgressEvent):void {
        var progressbar = document.getElementById("progressbar");
        var progressbarContainer = document.getElementById("progressbarContainer");
        var status = document.getElementById("status");
        var uploadPercentage = Math.ceil(event.loaded / event.total * 100);
        if (uploadPercentage) {
            progressbarContainer.style.display = "block";
            progressbar.style.width = uploadPercentage + '%';
            status.innerHTML = uploadPercentage + '%';
        }
        (uploadPercentage == 100) && this.hideModal();
    }
}