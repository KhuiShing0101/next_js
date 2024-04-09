import { BaseOption } from "./user";

export interface CreateMenuCategoryPayload extends BaseOption{
    name:string;
    isAvailable:boolean;
}
export interface MenuCategory{
    id:number;
    name:string;
    isAvailable:boolean;
}
