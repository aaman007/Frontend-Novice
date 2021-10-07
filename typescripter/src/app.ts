import { Invoice } from "./models/Invoice.js";
import { Payment } from "./models/Payment.js";
import { Action } from "./interfaces/Action.js";
import { ListTemplate } from "./templates/ListTemplate.js";
import { db } from "./config/Database.js";


// Forms
const form = document.querySelector('.new-item-form') as HTMLFormElement;

// Inputs
// const type = <HTMLSelectElement>document.querySelector('#type');  // Type Assertion way 1 with <>
const type = document.querySelector('#type') as HTMLSelectElement;  // Type Assertion way 2 with 'as'
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// List Templates
const itemList = document.querySelector('ul')!; // ! defines that the value won't be null for sure
const transactionList = new ListTemplate(itemList);

// Initializers
const initActions = () => {
    db.actions.forEach(action => {
        const heading = action instanceof Invoice ? "Invoice" : "Payment";
        transactionList.render(action, heading, "end");
    });
}


// Event Listeners
form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let values: [string, string, number];
    values = [toFrom.value, details.value, amount.valueAsNumber];

    let doc: Action;
    if (type.value == "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }

    db.addAction(doc);
    transactionList.render(doc, type.value, "end")
});


/// GENERICS
const addUID = <T extends object>(obj: T) => {
    const uid = Math.floor(Math.random() * 100);
    return { ...obj, uid };
}

let data1 = addUID({ name: 'ABC', age: 40 });
console.log(data1.name);

// with interfaces
// interface Resource {
//     uid: number;
//     resourceName: string;
//     data: object;
// }

// const data2: Resource = {
//     uid: 1,
//     resourceName: 'person',
//     data: {}
// };
interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T;
}

const data2: Resource<string> = {
    uid: 1,
    resourceName: 'message',
    data: ''
};

const data3: Resource<object> = {
    uid: 2,
    resourceName: 'person',
    data: {}
};

const data4: Resource<string[]> = {
    uid: 3,
    resourceName: 'shoppingList',
    data: ['bread']
}

// with arrays
const getArray = <T>(arr: T[]): T[] => {
    return new Array().concat(arr);
}

let numArr: number[] = getArray([1, 2, 3]);
let strArr = getArray<string>(['A', 'BD', 'DDF']);

/// ENUMS
enum Genre {ACTION, HORROR, COMEDY, FANTASY, THRILLER, MYSTERY, SUPERHERO};

interface Movie {
    title: string;
    genres: Genre[];
    description: string;
}

const movie1: Movie = {
    title: 'Avengers',
    genres: [Genre.ACTION, Genre.SUPERHERO],
    description: 'sgfhsddd'
};

const movie2: Movie = {
    title: 'Conjuring',
    genres: [Genre.HORROR],
    description: 'sdgsgfsdh'
};

console.log(movie1, movie2);

enum VEHICLE {
    CAR = 'car',
    TRUCK = 'truck'
}


/// TUPLES
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];

let tup: [string, number, boolean] = ['ryu', 25, true];
// tup[0] = false; // Cannot be done as 0th index must be a string
tup[0] = 'ken';

let student: [string, number];
//student = [23564, 'chun-li'];
student = ['chun-li', 23564];

let employees: [string, number][];
employees = [
    ['ABC', 1],
    ['CDE', 2]
];

/// Unions and Type
const pid: number|string = 5; 
const cid: number|string = 'dsfsdfdsfsd';
const productIds: (number|string)[] = []; // arrays

type numberOrString = number|string;
const xid: numberOrString = 5;
const yid: numberOrString = 'sdfsdfgsdg';
const zIds: numberOrString[] = [];


/// interfaces
interface UserInterface {
    readonly uid: numberOrString;
    name: string;
    nationality?: string; // Optional property
}

// in functions
interface MathFunc { (a: number, b: number): number; }

const add: MathFunc = (a: number, b: number): number => {
    return a + b;
}
const sub: MathFunc = (a: number, b: number): number => {
    return a - b;
}
