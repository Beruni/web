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

    @Output() confirmation = new EventEmitter<boolean>();

    @ViewChild(SemanticModalComponent)
    private modal:SemanticModalComponent;

    showModal() {
        this.modal.show({inverted: true});
    }

    confirmSelection() {
        this.modal.hide();
        this.confirmation.emit(true);
    }

    hideModal() {
        this.modal.hide();
        this.confirmation.emit(true);
    }
}