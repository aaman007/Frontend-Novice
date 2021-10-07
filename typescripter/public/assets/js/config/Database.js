class Database {
    constructor() {
        this.actions = [];
    }
    addAction(action) {
        this.actions.push(action);
    }
}
export const db = new Database();
