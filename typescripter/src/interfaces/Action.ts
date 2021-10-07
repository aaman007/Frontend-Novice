import { HasFormatter } from "./HasFormatter.js";

export interface Action extends HasFormatter {
    details: string;
    amount: number;
} 