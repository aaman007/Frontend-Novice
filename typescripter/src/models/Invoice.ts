import { Action } from "../interfaces/Action.js";

export class Invoice implements Action {
    readonly client: string;
    readonly details: string;
    readonly amount: number;

    // constructor(
    //     readonly client: string, 
    //     readonly details: string,
    //     readonly amount: number
    // ){}

    constructor(client: string, details: string, amount: number) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }


    format(): string {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}