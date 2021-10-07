import { Action } from "../interfaces/Action.js";

export class Payment implements Action {
    readonly recipient: string;
    readonly details: string;
    readonly amount: number;

    // constructor(
    //     readonly recipient: string, 
    //     readonly details: string,
    //     readonly amount: number
    // ){}

    constructor(recipient: string, details: string, amount: number) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }


    format(): string {
        return `${this.recipient} is owed $${this.amount} for ${this.details}`;
    }
}