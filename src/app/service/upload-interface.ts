import {UploadableFile} from "../components/dashboard/data_file/uploadable-file";

export interface UploadService {
    upload(dataFile:UploadableFile, listener:EventListenerObject):Promise<any>;
}