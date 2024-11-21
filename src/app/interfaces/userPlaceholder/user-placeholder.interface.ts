import { Address } from "cluster"
import { ICompany } from "./compny.interface";

export interface IUserPlaceholder{
    find(arg0: (user: any) => boolean): unknown;
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: ICompany; 
}