import {Component, ViewChild, OnInit, Input, ChangeDetectionStrategy, EventEmitter, Output} from "@angular/core";
import {UploadModalComponent} from "../common/upload_modal/upload-modal.component";
import {DataFileService} from "../../../services/data-file.service";
import {LocalStorageService} from "../../../services/local.storage.service";
import {PaginationService, PaginatePipe, PaginationControlsCmp} from "ng2-pagination/index";
import {SearchPipe} from "../../../pipes/search.pipe";
import {PreviewDataFileComponent} from "./preview_data_file/preview-data-file.component";
// import {Converter} from "csvtojson";

@Component({
    selector: 'view-upload-data-file',
    template: require('./data-file-dashboard.component.jade'),
    directives: [UploadModalComponent, PaginationControlsCmp, PreviewDataFileComponent],
    styles:[require('./data-file-dashboard.component.scss')],
    pipes: [SearchPipe, PaginatePipe],
    providers: [DataFileService, LocalStorageService, PaginationService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataFileDashboardComponent implements OnInit {
    @ViewChild(PreviewDataFileComponent)
    previewDataFileComponent:PreviewDataFileComponent;

    @ViewChild(UploadModalComponent)
    uploadModal:UploadModalComponent;

    @Input('data_files') files:JSON;
    @Output() selectedFileContent = new EventEmitter<string>();
    private fileContent:string;
    public selectionOfDataFile: Function;
    constructor(private dataFileService:DataFileService) { }

    ngOnInit() {
        this.uploadModal.uploadService = this.dataFileService;
        this.selectionOfDataFile = this.onDataFileSelection.bind(this)
    }

    formattedDate(date:string) {
        var dateString = new Date(date).toDateString();
        return dateString.split(' ').slice(0, 4).join(' ');
    }

    showModal(event: any) {
        var fileId = event.path[1].cells[3].innerHTML;
        this.dataFileService.fetchDataFileById(fileId, (data:any) => {
            this.fileContent = data;
            this.previewDataFileComponent.showModal();
        });
    }

    selectedDataFile() {
        this.selectedFileContent.emit(this.fileContent);
    }

    currentDataFile(fileContent:string){
        this.selectedFileContent.emit(fileContent)
    }

    onDataFileSelection(event:any){
        this.uploadModal.file = event.target.files[0];
        console.log(event.target.files[0]);
        // var classReference = this;
        // fileReader.onload = function (e) {
        //     classReference.uploadModal.fileContent = fileReader.result;
        //     classReference.uploadModal.uplaodableFile = true;
        // }
    }

}