import {Component, HostBinding, Input, Output, Provider, forwardRef, EventEmitter} from '@angular/core';
import {NgControl} from '@angular/common';
import {TagInputItemComponent} from './tag-input-item.component';

@Component({
    selector: 'tags-input',
    template:
        `<tag-input-item
    [text]="tag"
    [index]="index"
    [selected]="selectedTag === index"
    (tagRemoved)="_removeTag($event)"
    *ngFor="let tag of tagsList; let index = index">
  </tag-input-item>
  <input
    class="ng2-tag-input-field"
    type="text"
    [placeholder]="placeholder"
    [(ngModel)]="inputValue"
    (paste)="inputPaste($event)"
    (keydown)="inputChanged($event)"
    (blur)="inputBlurred($event)"
    (focus)="inputFocused()"
    #tagInputRef>`,

    styles: [`
    
  `],
    directives: [TagInputItemComponent]
})
export class TagsInputComponent {
    @Input() placeholder: string = 'Add tags';
    @Input() ngModel: string[];
    @Input() delimiterCode: string = '188';
    @Input() addOnBlur: boolean = true;
    @Input() addOnEnter: boolean = true;
    @Input() addOnPaste: boolean = true;
    @Input() allowedTagsPattern: RegExp = /.+/;
    @HostBinding('class.ng2-tag-input-focus') isFocussed:any;

    public tagsList: string[];
    public inputValue: string = '';
    public delimiter: number;
    public selectedTag: number;

    constructor(private _ngControl: NgControl) {
        this._ngControl.valueAccessor = this;
    }

    ngOnInit() {
        if (this.ngModel) this.tagsList = this.ngModel;
        this.onChange(this.tagsList);
        this.delimiter = parseInt(this.delimiterCode);
    }

    ngAfterViewInit() {
        // If the user passes an undefined variable to ngModel this will warn
        // and set the value to an empty array
        if (!this.tagsList) {
            console.warn('TagsInputComponent was passed an undefined value in ngModel. Please make sure the variable is defined.');
            this.tagsList = [];
            this.onChange(this.tagsList);
        }
    }

    inputChanged(event:any) {
        let key = event.keyCode;
        switch(key) {
            case 8: // Backspace
                this._handleBackspace();
                break;
            case 13: //Enter
                this.addOnEnter && this._addTags([this.inputValue]);
                event.preventDefault();
                break;

            case this.delimiter:
                this._addTags([this.inputValue]);
                event.preventDefault();
                break;

            default:
                this._resetSelected();
                break;
        }
    }

    inputBlurred(event:any) {
        this.addOnBlur && this._addTags([this.inputValue]);
        this.isFocussed = false;
    }
    inputFocused(event:any) {
        this.isFocussed = true;
    }

    inputPaste(event:any) {
        let clipboardData = event.clipboardData || (event.originalEvent && event.originalEvent.clipboardData);
        let pastedString = clipboardData.getData('text/plain');
        let tags = this._splitString(pastedString);
        let tagsToAdd = tags.filter((tag) => this._isTagValid(tag));
        this._addTags(tagsToAdd);
        setTimeout(() => this.inputValue = '', 3000);
    }

    private _splitString(tagString: string) {
        tagString = tagString.trim();
        let tags = tagString.split(String.fromCharCode(this.delimiter));
        return tags.filter((tag) => !!tag);
    }

    private _isTagValid(tagString: string) {
        return this.allowedTagsPattern.test(tagString);
    }

    private _addTags(tags: string[]) {
        let validTags = tags.filter((tag) => this._isTagValid(tag));
        this.tagsList = this.tagsList.concat(validTags);
        this._resetSelected();
        this._resetInput();
        this.onChange(this.tagsList);
    }

    private _removeTag(tagIndexToRemove:number) {
        this.tagsList.splice(tagIndexToRemove, 1);
        this._resetSelected();
        this.onChange(this.tagsList);
    }

    private _handleBackspace() {
        if (!this.inputValue.length && this.tagsList.length) {
            if (!(this.selectedTag === undefined || this.selectedTag === null)) {
                this._removeTag(this.selectedTag);
            }
            else {
                this.selectedTag = this.tagsList.length - 1;
            }
        }
    }

    private _resetSelected() {
        this.selectedTag = null;
    }

    private _resetInput() {
        this.inputValue = '';
    }

    /** Implemented as part of ControlValueAccessor. */
    onChange: (value:any) => any = (abc) => { };

    onTouched: () => any = () => { };

    writeValue(value: any) { }

    registerOnChange(fn: any) {
        this.onChange = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouched = fn;
    }
}
