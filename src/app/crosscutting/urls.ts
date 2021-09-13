import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class Url {
    public apiUrl : string = '';

    constructor() {
        this.apiUrl = environment.apiPath;
    }

    public savePayment(): string {
        return this.apiUrl + '/savePayment';
    }
}