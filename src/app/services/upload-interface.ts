import {UploadableFile} from "../components/dashboard/data_file/uploadable-file";

export interface UploadService {
    upload(dataFile:UploadableFile, callback: Function):any;
    init():UploadService;
    attachListener(event:string, listener:EventListenerObject):UploadService;
}