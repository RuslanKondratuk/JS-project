'use strict'
// /**
//  *
//  * @param {String} name - Username to sayHello to user
//  * @returns {undefined}
//  */
// function sayHello(name) {
//     if(typeof name !== 'string') {
//         const err = new TypeError('Name must be a string');
//        throw err;
//     }
//     console.log(`Hello, ${name}`);
// }


// /**
//  *
//  * @param {Number} base
//  * @param {Number} power - More than 0
//  * @returns {Number} base on power
//  * @throws {TypeError}
//  * @throws {RangeError}
//  */
// function pow (base, power) {
//     if(typeof base !== 'number' || typeof power !== 'number') {
//         throw new TypeError ('Base and Power must be a number')
//     }
//     if(power <= 0) {
//         throw new RangeError ('Power can not be negative or zero')
//     }
//     let res = 1;
//     for (let i = 0; i < power; i++) {
//         res *= base;
//     }
//     return res;
// }


// try {
//     console.log('start');
//     pow (2, -2);
//     console.log('end');
// } catch (error) {
//     console.log(error)
// }


// console.log('Our code is alive')


// class User {
//     constructor(firstName, lastName, age, email) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.email = email;
//     }

//     getFullName () {
//         return (`${this.firstName} ${this.lastName}`);
//     }

//     sayHello () {
//         console.log (`Hello, ${this.firstName}`)
//     }
// }

// const user1 = new User('Ruslan', 'Kondratuk', 23, 'ruslan@gmail.com');
// const user2 = new User('Rus', 'Adav', 21, 'arac@gmail.com');


// 1. class Fuel {
//     constructor(volume, density) {
//         this.volume = volume;
//         this.density = density;
//     }

//     countsWeightOfFuel() {
//         let masFuel = this.volume * this.density;
//         return masFuel;
//     }
// }

// /**
//  * @param {Number} weigthOwn
//  * @param {Fuel} fuel
//  */
// class Auto {
//     constructor (weigthOwn, fuel) {
//         this.weigthOwn = weigthOwn;
//         this.fuel = fuel;
//     }

//     countsAllWeightAutoWithFuel () {
//         let weigthAllAuto = this.weigthOwn + this.fuel.countsWeightOfFuel();
//         return weigthAllAuto;
//     }

// }


// const fuel1 = new Fuel(20, 2);

// const auto1 = new Auto(200, fuel1)


//  class Friend {
//     constructor(ownCash, friend) {
//         this.ownCash = ownCash;
//         this.friend = friend;
//     }

//     countMoney() {
//         if(this.friend === null) {
//             return this.ownCash;
//         }
//         return this.ownCash + this.friend.countMoney();
//     }
// }


//  let friends1 = new Friend (110, null);
//  let friends2 = new Friend (10, friends1);
//  let friends3 = new Friend (1210, friends2);
//  let friends4 = new Friend (110, friends3);


// class Validator {
//     constructor (from, to) {
//         this.from = from;
//         this.to = to;
//     }

//     set from (value) {
//         if (typeof value !== 'number') {
//             throw new TypeError('Type not can be')
//         }
//         this._from = value;
//     }
//     get from() {
//         return this._from
//     }
//     set to (value) {
//         if (typeof value !== 'number') {
//             throw new TypeError('Type not can be')
//         }
//         this._to = value;
//     }
//     get to() {
//         return this._to
//     }


//     range() {
//         const arrayNumber = [];

//         for (let i = this._from; i < this._to; i++) {
//             arrayNumber.push(i);
//         }
//         return arrayNumber;
//     }

//     getNumber(num) {
//         if(this._from <= num ) {
//             return true
//         }
//         return false;
//     }
// }


// const val1 = new Validator(10, 25);


// class Figure {
//     constructor (angelQuantity) {
//         this.angelQuantity = angelQuantity;
//     }

//     getArea() {

//     }
// }

// class Circle extends Figure {
//     constructor(r) {
//         super(Infinity);
//         this.r = r;
//     }

//     getArea() {
//         return Math.PI * this.radius;
//     }
// }


// const crc1 = new Circle (20);


// class Moderator {
//     constructor(mail, password) {
//         this.mail = mail;
//         this.password = password;
//     }

//     banUser (user) {
//         return user.isBanned = true;
//     }
// }


// class User extends Moderator {
//     constructor(isBanned, mail, password) {
//         super(mail, password)
//         this.isBanned = isBanned;
//     }

//     sayHello () {
//         return `Hello`;
//     }
// }

// const moder1 = new Moderator ('mod@mail.com', '11111');
// const us1 = new User (false, 'us@mail.com', '2222');


// class Worker {
//     constructor(name, rate, days) {
//         this.name = name;
//         this.rate = rate;
//     }

//     set rate (value) {
//         if (value < 0) {
//             throw new RangeError('Error')
//         }
//         this._rate = value;
//     }

//     get rate() {
//         return this._rate;
//     }
// }

// class Validator {
//     constructor (from, to) {
//         this.from = from;
//         this.to = to;
//     }

//     set from (value) {
//         if (typeof value !== 'number') {
//             throw new TypeError('typeError');
//         }
//         this._from = value;
//     }
//     get from () {
//         return this._from;
//     }
//     set to (valueTo) {
//         if (typeof valueTo !== 'number') {
//             throw new TypeError('typeError');
//         }
//         this._to = valueTo;
//     }
//     get to () {
//         return this._to;
//     }

//     get range() {
//         let array = [];
//         for (let i = this._from; i < this._to; i++) {
//             array.push(i);
//         }
//         return array
//     }

//     numberArray (num) {
//         debugger
//         if(this.range.includes(num)) {
//             return true;
//         }
//         return false;

//     }
// }

// class Figure {
//     constructor (type) {
//         this.sideQuantity = type;
//     }

//     getArea() {

//     }
// }


// class Circle extends Figure {
//     constructor(r) {
//         super (Infinity);
//         this.r = r;
//     }

//     getArea() {
//         return 2 * Math.PI * this.r;
//     }
// }



// class User  {
//     constructor (mail, password, isBanned) {
//         this.mail = mail;
//         this.password = password;
//         this.isBanned = isBanned;
//     }
//     sayHello() {
//         return `Hello`;
//     }
// }

// class Moderator extends User {
//     constructor (mail, password) {
//         super(mail, password)
//     }

//     modBand(us) {
//         us.isBanned = true;
//     }
// }


// class ListItem {
//     constructor (value) {
//         this.value = value;
//         this.next = null;
//         this.prev = null;
//     }


//     get value() {
//         return this._value
//     }

//     set value(v) {
//         this._value = v;
//     }
// }


// class LinkedList {
//     constructor(...args) {
//         this.length = 0;
//         this.head = null;
//         this.tail = null;
//         for (let i = 0; i < args.length; i++) {
//             this.push(args[i]);
//         }
//     }


//     push(v) {
//        const newItem = new ListItem(v);
//         if (this.length === 0) {
//             this.head = newItem;
//             this.tail = newItem;
//         } else {
//             this.tail.next = newItem;
//             newItem.prev = this.tail;
//             this.tail = newItem;
//         }

//         return  ++this.length
//     }


//     deleteElement(value) {

//     }
//  }

// class Student {
//     constructor (firstName, lastName, dateEnter) {
//         this.firstName = firstName,
//         this.lastName = lastName,
//         this.dateEnter = dateEnter
//     }

//     getCourse () {
//         const dateNow = new Date();
//         return `${dateNow.getFullYear() - this.dateEnter} course`;
//     }
// }


// function get() {
//     const dateNow = new Date();
//     if (dateNow.getMonth() > 1 && dateNow.getMonth() < 5) {
//         return 'Вeсна';
//     } else if (dateNow.getMonth() > 4 && dateNow.getMonth() < 8) {
//             return 'Літо';
//     }
//         else if (dateNow.getMonth() > 7 && dateNow.getMonth() < 11) {
//             return 'Осінь';
//     } else {
//         return 'Зима';
//     }
// }



// class ListItem {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//         this.prev = null;
//     }

//     get () {
//         return this._value;
//     }

//     set (v) {
//         this._value = v;
//     }

// }


// class LinkedList {
//     constructor(...args) {
//         this.length = 0;
//         this.head = null;
//         this.tail = null;
//         for (let i = 0; i < args.length; i++) {
//             this.push(args[i]);
//         }
//     }

//     push(v) {
//         const newItem = new ListItem(v);
//         if (this.length === 0) {
//             this.head = newItem;
//             this.tail = newItem;
//         } else {
//             this.tail.next = newItem;
//             newItem.prev = this.tail;
//             this.tail = newItem;
//         }
//         return ++this.length;
//     }

//     [Symbol.iterator] () {
//         return new IteratorList (this);
//     }

//     deleteHeadElement() {
//         const nextElement = this.head.next;
//         nextElement.prev = null;
//         this.head = nextElement;
//         this.length--;
//     }
//     deleteTailElement() {
//         const prevElement = this.tail.prev;
//         prevElement.next = null;
//         this.tail = prevElement;
//         this.length--;
//     }
//     deleteElement(v) {
//         for (let item of this) {
//             if (item.value === v) {
//                 const nextElement = item.next;
//                 const prevElement = item.prev;
//                 nextElement.prev = prevElement;
//                 prevElement.next = nextElement;
//             }
//         }
//         this.length--
//     }


// }


// class IteratorList {
//     constructor(list) {
//         this.list = list;
//         this.currentNode = null;
//     }

//     next() {
//         this.currentNode = this.currentNode ? this.currentNode.next : this.list.head
//         return {
//             value: this.currentNode,
//             done: !this.currentNode,
//         }
//     }
// }


// class ListItem {
//     constructor(value) {
//         this.value = value;
//         this.prev = null;
//     }

//     get () {
//         return this._value;
//     }

//     set (v) {
//         this._value = v;
//     }
// }

// class LinkedList {
//     constructor(...args) {
//         this.length = 0;
//         this.head = null;
//         this.tail = null;
//         for (let i = 0; i < args.length; i++) {
//             this.push(args[i]);
//         }
//     }

//     push(v) {

//         const newItem = new ListItem(v);
//         if (this.length === 0) {
//             this.head = newItem;
//             this.tail = newItem;
//         } else {
//             newItem.prev = this.tail;
//             this.tail = newItem;
//         }
//         return ++this.length;
//     }

//     [Symbol.iterator] () {
//         return new IteratorList (this);
//     }

    // deleteHeadElement() {
    //     const nextElement = this.head.next;
    //     this.head = nextElement;
    //     this.length--;
    // }
//     deleteTailElement() {
//         const prevElement = this.tail.prev;
//         this.tail = prevElement;
//         this.length--;
//     }
//     deleteElement(v) {
//         for (let item of this) {
//             if (item.prev === null) {
//                 return undefined;
//             } else {
//                 const prevElement = item.prev;
//                 if (prevElement.value === v) {
//                     item.prev = prevElement.prev
//                     this.length--;
//                 }
//             }
//         }
//     }
// }

// class IteratorList {
//     constructor(list) {
//         this.list = list;
//         this.currentNode = null;
//     }

    // next() {
    //     this.currentNode = this.currentNode ? this.currentNode.prev : this.list.head
    //     return {
    //         value: this.currentNode,
    //         done: !this.currentNode,
    //     }
    // }
//     next() {
//         if (!this.currentNode) {
//             this.currentNode = this.list.tail
//         } else {
//             this.currentNode = this.currentNode.prev;
//         }
//         return {
//             value: this.currentNode,
//             done: !this.currentNode,
//         }
//     }
// }


// const arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// function binarySearchFunction (array, serchValue) {
//     let start = 0;
//     let end = array.length - 1;
//     let middle = Math.round((start+end)/2);
//     if (serchValue === array[middle]) {
//         return middle;
//     }
//     else if (serchValue > array[middle]) {
//         return middle + binarySearchFunction (array.slice((Math.floor(array.length/2)),array.length), serchValue);
//     } else  {
//         return binarySearchFunction (array.slice(0, (Math.floor(array.length/2))), serchValue);
//     }
// }



// const strBr = '()()()'


// function pairOfBrackets(string) {
//     const stackArray = new Stack();
//     const arrayOfString = string.split('');
//     const pairBrack = {
//         '(' : ')',
//         '{' : '}',
//         '[' : ']',
//     }
//     for (let i = 0; i < arrayOfString.length; i++) {
//         if (arrayOfString[i] === '(') {
//             stackArray.push(arrayOfString[i]);
//             continue;
//         }
//         if (arrayOfString[i] === ')') {
//             if (stackArray.isEmpty) {
//                 return false
//             } else {
//             if (stackArray.pick() === '(') {
//             stackArray.pop(stackArray[stackArray.size-1])
//             } else if (stackArray.pick() !== '(') {
//             return false;
//             }}
//         }
//     } return true;
// }

// /*
// Парні дужки
// ()[] // true
// {([])} //true
// (}[)]) //false
// { // false
// Написати функцію, яка перевіряє переданий їй рядок на симетричність дужок.
// Пари дужок краще зберігати в об'єкті
// {
//     '(':')',
//     '{':'}',
//     '[':']'
// }


// // 1. Пройтись циклом по рядку.
// // 2. Якщо символ, який перед нами на цій ітерації - це відкриваюча дужка, то ми її зберігаємо в стек.
// // 3. Якщо перед нами закриваюча дужка, то ми заглядаємо в стек і дивимось, чи є вона тою самою закриваючою, парною до цієї.
// //         Якщо вона парна, вони обидві аннігілюються
// //         Якщо це не пара до відкриваючої - одразу повертаєм false
// // 4. Якщо ми дійшли до кінця рядку - треба проаналізувати, чи лишилось щось у стекe


// class Queue {
//     constructor (...arg) {
//         this._head = 0;
//         this._tial = 0;
//         for (const iterator of arg) {
//             this.enqueue(iterator);
//         }
//     }

//     get size() {
//         return this._tial - this._head;
//     }

//     enqueue (value) {
//         this[`_${this._tial}`] = value;
//         this._tial++;
//         return this.size;
//     }

//     dequeue () {
//         if (this.size) {
//             const firstItem = this[`_${this._head}`];
//             delete this[`_${this._head}`];
//             this._head++;
//             return firstItem
//         }
//     }
// }


// function mergeQueues (q1, q2) {
//     const allq = new Queue();
//     let lengthq;
//     if (q1._tial > q2._tial) {
//         lengthq = q1._tial;
//     } else {
//         lengthq = q2._tial;
//     }
//     for (let i = 0; i < lengthq; i++) {
//         if (q1[`_${i}`] !== undefined) {
//             allq.enqueue(q1[`_${i}`])
//         }
//         if (q2[`_${i}`] !== undefined) {
//             allq.enqueue(q2[`_${i}`]);
//         }
//     }
//     return allq;
// }

// const user1 = new Map

// function createVocabulary (str) {
//     const map = new Map();
//     for (let i = 0; i < str.length; i++) {
//         if (map.has(str[i])) {
//             map.set(str[i], map.get(str[i])+1);
//         } else {
//         map.set(str[i], +1) };
//     } return map;
// }


// function compare(string1, string2) {
//     const map1 = createVocabulary(string1);
//     const map2 = createVocabulary(string2);
//     if (map1.size !== map2.size) {
//         return false;
//     }
//     for (let k = 0; k < map1.size; k++) {
//        if(map1.get(string1[k]) === map2.get(string1[k])) {
//         continue
//        } else {
//         return false;
//        }
//     }
//     return true;
// }