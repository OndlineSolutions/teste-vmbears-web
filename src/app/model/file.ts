export class FileUpload{
    id: number;
    name: String;
    size: String;
    status: String;

    constructor(id: number, name: String, size: String,  status: String){
        this.name = name;
        this.size = size;
        this.status = status;
    }
}