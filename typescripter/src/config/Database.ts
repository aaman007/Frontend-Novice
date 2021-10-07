import { Action } from "../interfaces/Action.js";

class Database {
    readonly actions: Action[];
    
    constructor() {
        this.actions = [];
    }

    addAction(action: Action) {
        this.actions.push(action);
    }
}

export const db = new Database();