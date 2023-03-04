import { User } from "./User";

export class Repository {
    id:number;
    name : string;
    full_name:string;
    description : string;
    url : string;
    size : number;
    forksCount : number;
    owner:User;
    totalCount: number;
    constructor (repository : any) {
        this.id=repository.id;
        this.name = repository.name;
        this.full_name=repository.full_name;
        this.description = repository.description;
        this.url = repository.url;
        this.size = repository.size;
        this.forksCount = repository.forks;
        this.owner=repository.owner;
        this.totalCount=repository.total_count;
    }
}