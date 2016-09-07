import {Component, ViewChild, Input, Injectable, EventEmitter, Output} from "@angular/core";
import {TagsInputComponent} from "../tags/tags.component";
import {DataFileService} from "../../../../services/data-file.service";
import {SemanticModalComponent} from "ng-semantic/ng-semantic";
import {UploadableFile} from "../../data_file/uploadable-file";
import {UploadService} from "../../../../services/upload-interface";
import {BoundaryFileService} from "../../../../services/boundary-file.service";
import {ProgressListener} from "../listeners/progress-listener";

@Component({
  selector: 'upload-modal',
  template: require('./upload-modal.component.jade'),
  styles: [require('./upload-modal.component.scss')],
  directives: [TagsInputComponent, SemanticModalComponent],
  providers: [DataFileService, BoundaryFileService, ProgressListener]
})

@Injectable()
export class UploadModalComponent {

  constructor(private progressListener: ProgressListener) {
  }

  @ViewChild(SemanticModalComponent)
  private modal: SemanticModalComponent;
  @Input() public selectedFile: Function;
  @Input() title: String;
  @Input() uploadFilePlaceholder: String;
  @Input() formats: String;
  @Input() supportedFormats:String;
  @Output() chooseFileContent = new EventEmitter<string>();
  public tags:String[] = [];
  public name:String = '';
  public file:File;
  public uploadService:UploadService;
  public showMap:boolean = false;
  public fileContent:string;
  public mapId:string = 'uploadMap';
  public uplaodableFile:boolean;

  showModal() {
    this.modal.show({inverted: true})
  }


    hideModal() {
        this.modal.hide()
        this.showMap = false;
    }

    uploadSelectedFile() {
        var classReference = this;
        if (this.file && this.uplaodableFile) {
            var file = new UploadableFile(this.name, this.file, this.tags);
            this.uploadService.init().attachListener("progress", this.progressListener)
                .upload(file, function (isSuccessFull:boolean, message:string) {
                    classReference.chooseFileContent.emit(classReference.fileContent);
                    classReference.hideModal();
                });
        }
    }
}