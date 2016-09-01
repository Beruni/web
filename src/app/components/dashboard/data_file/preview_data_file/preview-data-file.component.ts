import {Component, ViewChild, EventEmitter, Output} from "@angular/core";
import {SemanticModalComponent} from "ng-semantic/ng-semantic";
import {DataFileService} from "../../../../services/data-file.service";

@Component({
    selector: 'preview-data-file',
    template: require('./preview-data-file.component.jade'),
    styles: [require('./preview-data-file.component.scss')],
    directives: [SemanticModalComponent]
})

export class PreviewDataFileComponent {
    @Output() selectedDataFile = new EventEmitter<string>();

    @ViewChild(SemanticModalComponent)
    private modal:SemanticModalComponent;

    private fileContent: string;

    constructor(private dataFileService:DataFileService) {
    }

    showModal(fileId:string) {
        this.modal.show({inverted: true});
        this.dataFileService.fetchDataFileById(fileId,(data:any) =>{
            this.fileContent = data;
        })
    }

    confirmSelection() {
        this.modal.hide();
        this.selectedDataFile.emit(this.fileContent);
    }

    hideModal() {
        this.modal.hide();
    }
}