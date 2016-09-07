import {Component, ViewChild, ChangeDetectionStrategy, Input, EventEmitter, Output} from "@angular/core";
import {BoundaryFileService} from "../../../services/boundary-file.service";
import {UploadModalComponent} from "../common/upload_modal/upload-modal.component";
import {LocalStorageService} from "../../../services/local.storage.service";
import {SearchPipe} from "../../../pipes/search.pipe";
import {PaginatePipe, PaginationControlsCmp, PaginationService} from "ng2-pagination";
import {PreviewBoundaryFileComponent} from "./preview_boundary_file/preview-boundary.component";
import {LoadMapService} from "../../../services/load-map.service";

@Component({
    selector: 'view-upload-boundary-file',
    template: require('./boundary-file-dashboard.component.jade'),
    styles:[require('./boundary-file-dashboard.component.scss')],
    directives: [UploadModalComponent, PaginationControlsCmp, PreviewBoundaryFileComponent],
    pipes: [SearchPipe, PaginatePipe],
    providers: [BoundaryFileService, LocalStorageService, PaginationService, LoadMapService],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class BoundaryFileDashBoardComponent {
    @ViewChild(UploadModalComponent)
    uploadModal:UploadModalComponent;

    @Input('boundary_files') files:JSON;

    @Output() selectedFileContent = new EventEmitter<string>();

    @ViewChild(PreviewBoundaryFileComponent)
    previewBoundaryFileComponent:PreviewBoundaryFileComponent;
    public selectionOfBoundaryFile: Function;
    private fileContent:string;


    constructor(private boundaryFileService:BoundaryFileService,  private loadMapService: LoadMapService) {
    }

    ngOnInit() {
        this.uploadModal.uploadService = this.boundaryFileService;
        this.selectionOfBoundaryFile = this.onBoundaryFileSelection.bind(this);
    }

    onBoundaryFileSelection(event:any){
        var mapId = this.uploadModal.mapId;
        this.uploadModal.file = event.target.files[0];
        var fileReader = new FileReader();
        fileReader.readAsText(this.uploadModal.file);
        var classReference = this;
        fileReader.onload = function (e) {
            classReference.loadMapService.isGeoJson(JSON.parse(fileReader.result), function (isValidGeoFile:boolean) {
                classReference.uploadModal.uplaodableFile = isValidGeoFile;
                if(isValidGeoFile){
                    classReference.uploadModal.fileContent = fileReader.result;
                    classReference.loadMapService.loadMap(JSON.parse(fileReader.result), mapId);
                }
            })
        }
    }

    formattedDate(date:string) {
        var datString = new Date(date).toDateString();
        return datString.split(' ').slice(0, 4).join(' ');
    }

    showModal(event: any) {
        var fileId = event.path[1].cells[3].innerHTML;
        this.boundaryFileService.fetchBoundaryFileById(fileId, (data:any) => {
            this.fileContent = data;
            this.previewBoundaryFileComponent.showModal(this.fileContent);
        });
    }

    selectedBoundaryFile() {
        this.selectedFileContent.emit(this.fileContent);
    }

    currentBoundaryFile(fileContent:string){
        this.selectedFileContent.emit(fileContent)
    }
}