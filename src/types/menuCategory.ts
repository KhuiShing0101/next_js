import { BaseOption } from "./user";

export interface CreateMenuCategoryPayload extends BaseOption{
    name:string;
    isAvailable:boolean;
    companyId ?:number;
}

export interface updateMenuCategoryPayload extends BaseOption{
    id:number;
    name:string;
    isAvailable:boolean;
}