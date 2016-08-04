import {DataFile} from "../components/dashboard/data_file/data-file";

export interface UploadService {
    upload(dataFile:DataFile):Promise<any>;
}