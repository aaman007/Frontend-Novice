export class Payment {
    // constructor(
    //     readonly recipient: string, 
    //     readonly details: string,
    //     readonly amount: number
    // ){}
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed $${this.amount} for ${this.details}`;
    }
}
