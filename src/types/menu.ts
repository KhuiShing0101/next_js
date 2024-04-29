import { BaseOption } from "./user";

interface BaseMenu{
    name:string;
    price:number;
}

export interface CreateMenuPayload extends BaseOption{
    name:string;
    price:number;
}

export interface NewMenuParams extends BaseMenu,BaseOption{}
