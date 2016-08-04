export class UploadableFile {
    constructor(public title:String,
                public file:File,
                public tags:String[]) {
        this.title = title;
        this.file = file;
        this.tags = tags;
    }
}
