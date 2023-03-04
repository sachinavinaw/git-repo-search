import { Repository } from "./Repository";

export interface IResponse{
    count:number;
    incompleteResults: boolean;
    items:Repository[]
}
