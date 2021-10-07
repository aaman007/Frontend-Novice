import { Invoice } from "./models/Invoice.js";
import { Payment } from "./models/Payment.js";
import { ListTemplate } from "./templates/ListTemplate.js";
import { db } from "./config/Database.js";
// Forms
const form = document.querySelector('.new-item-form');
// Inputs
// const type = <HTMLSelectElement>document.querySelector('#type');  // Type Assertion way 1 with <>
const type = document.querySelector('#type'); // Type Assertion way 2 with 'as'
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// List Templates
const itemList = document.querySelector('ul'); // ! defines that the value won't be null for sure
const transactionList = new ListTemplate(itemList);
// Initializers
const initActions = () => {
    db.actions.forEach(action => {
        const heading = action instanceof Invoice ? "Invoice" : "Payment";
        transactionList.render(action, heading, "end");
    });
};
// Event Listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value == "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    db.addAction(doc);
    transactionList.render(doc, type.value, "end");
});
/// GENERICS
const addUID = (obj) => {
    const uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let data1 = addUID({ name: 'ABC', age: 40 });
console.log(data1.name);
const data2 = {
    uid: 1,
    resourceName: 'message',
    data: ''
};
const data3 = {
    uid: 2,
    resourceName: 'person',
    data: {}
};
const data4 = {
    uid: 3,
    resourceName: 'shoppingList',
    data: ['bread']
};
// with arrays
const getArray = (arr) => {
    return new Array().concat(arr);
};
let numArr = getArray([1, 2, 3]);
let strArr = getArray(['A', 'BD', 'DDF']);
/// ENUMS
var Genre;
(function (Genre) {
    Genre[Genre["ACTION"] = 0] = "ACTION";
    Genre[Genre["HORROR"] = 1] = "HORROR";
    Genre[Genre["COMEDY"] = 2] = "COMEDY";
    Genre[Genre["FANTASY"] = 3] = "FANTASY";
    Genre[Genre["THRILLER"] = 4] = "THRILLER";
    Genre[Genre["MYSTERY"] = 5] = "MYSTERY";
    Genre[Genre["SUPERHERO"] = 6] = "SUPERHERO";
})(Genre || (Genre = {}));
;
const movie1 = {
    title: 'Avengers',
    genres: [Genre.ACTION, Genre.SUPERHERO],
    description: 'sgfhsddd'
};
const movie2 = {
    title: 'Conjuring',
    genres: [Genre.HORROR],
    description: 'sdgsgfsdh'
};
console.log(movie1, movie2);
var VEHICLE;
(function (VEHICLE) {
    VEHICLE["CAR"] = "car";
    VEHICLE["TRUCK"] = "truck";
})(VEHICLE || (VEHICLE = {}));
/// TUPLES
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];
let tup = ['ryu', 25, true];
// tup[0] = false; // Cannot be done as 0th index must be a string
tup[0] = 'ken';
let student;
//student = [23564, 'chun-li'];
student = ['chun-li', 23564];
let employees;
employees = [
    ['ABC', 1],
    ['CDE', 2]
];
/// Unions and Type
const pid = 5;
const cid = 'dsfsdfdsfsd';
const productIds = []; // arrays
const xid = 5;
const yid = 'sdfsdfgsdg';
const zIds = [];
const add = (a, b) => {
    return a + b;
};
const sub = (a, b) => {
    return a - b;
};
