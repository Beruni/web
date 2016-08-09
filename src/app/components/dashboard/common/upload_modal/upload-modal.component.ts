import {Component, ViewChild, Input, Injectable} from "@angular/core";
import {TagsInputComponent} from "../tags/tags.component";
import {DataFileService} from "../../../../services/data-file.service";
import {SemanticModalComponent} from "ng-semantic/ng-semantic";
import {UploadableFile} from "../../data_file/uploadable-file";
import {UploadService} from "../../../../services/upload-interface";
import {BoundaryFileService} from "../../../../services/boundary-file.service";
import {ProgressListener} from "../listeners/progress-listener"
@Component({
    selector: 'upload-modal',
    template: require('./upload-modal.component.jade'),
    styles: [require('./upload-modal.component.scss')],
    directives: [TagsInputComponent, SemanticModalComponent],
    providers: [DataFileService, BoundaryFileService, ProgressListener]
})

export class UploadModalComponent {

    constructor(private progressListener:ProgressListener) {
    }

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
    public successfullyUploaded:boolean;
    public showMessage:string;

    showModal() {
        this.modal.show({inverted: true})
    }

    ngOnInit() {
        this.hideCompletionToast()
    }

    showCompletionToast(isSuccessful:boolean, message:string) {
        this.successfullyUploaded = isSuccessful;
        this.showMessage = message;
        var element = document.getElementById("completion-toast");
        element.style.display = "block";
        $('#completion-toast').delay(3000).hide(50);
        $('#container').delay(3000).hide(50);
    }

    private hideCompletionToast() {
        document.getElementById("completion-toast").style.display = "none";
    }

    setClasses() {
        var setColor = {};
        if (this.successfullyUploaded)
            setColor = {green: true};
        else
            setColor = {red: true};
        return setColor
    }

    hideModal() {
        this.modal.hide()
    }

    uploadSelectedFile() {
        var classReference = this;
        if (this.file) {
            var file = new UploadableFile(this.name, this.file, this.tags);
            this.uploadService.init().attachListener("progress", this.progressListener)
                .upload(file, function (isSuccessFull:boolean, message:string) {
                    classReference.showCompletionToast(isSuccessFull, message)
                });
        }
    }

    selectedFile(event:any) {
        this.file = event.target.files[0];
    }

}