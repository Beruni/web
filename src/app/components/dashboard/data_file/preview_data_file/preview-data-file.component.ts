import {Component, ViewChild, EventEmitter, Output} from "@angular/core";
import {SemanticModalComponent} from "ng-semantic/ng-semantic";

@Component({
    selector: 'preview-data-file',
    template: require('./preview-data-file.component.jade'),
    styles: [require('./preview-data-file.component.scss')],
    directives: [SemanticModalComponent]
})

export class PreviewDataFileComponent {
    @Output() selectedDataFile = new EventEmitter<string>();

    private fileContent: string;

    @ViewChild(SemanticModalComponent)
    private modal:SemanticModalComponent;

    showModal(fileId:string) {
        this.modal.show({inverted: true});
    }


    confirmSelection() {
        this.modal.hide();
        this.selectedDataFile.emit(this.fileContent);
    }

    hideModal() {
        this.modal.hide();
    }
}