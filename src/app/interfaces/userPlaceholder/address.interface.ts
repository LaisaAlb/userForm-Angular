import { IGeo } from "./geo.interface";

export interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IGeo; 
}