"use strict";
//* Exp -1  ----------
let num = 5;
num = 34;
//num = "dev"  // we can assign only number
console.log(num + 54);
//* Exp -2  -----------
const names = [];
names.push("dev");
//names.push(1) // we can insert only string
//* Exp -3  ---------
function sum(a, b) {
    return a + b;
}
console.log(3 + 4);
//* Exp -4 - Tuples  -------
let address;
address = [111, "indore", 24445];
//* Exp -5  --------
let person; // age is optional
person = { name: "john" };
let anPerson; // age is required
anPerson = { name: "john", age: 45 };
//* Exp -6 -------
function add(a, b) {
    return b ? a + b : a;
}
console.log("1" + "3");
let p;
p = { name: "def", age: 35, id: 345 };
let p1; // Union
p1 = { name: "jack", age: 34, id: 34 }; // roll or id optional
let p2; // InterSection
p2 = { name: "jack", age: 34, id: 34, roll: 34 }; // roll and id required
let c;
c = 1;
c = "21";
let c1;
//c1 = true
//c1 = "34"
//c1 = 32 // Nothing is assignable to type 'nave
//* Naver Array  ---
let arr = [];
//arr.push("rfvt")  // Nothing pushed in type never array
//* Class
//in js
class Car {
    constructor(brand) {
        this.brand = brand;
    }
    getBrand() {
        console.log(this.brand);
    }
}
let car = new Car("Audi");
car.getBrand();
//in ts - public
class Car1 {
    constructor(brand) {
        this.brand = brand;
    }
    getBrand() {
        console.log(this.brand);
    }
}
let car1 = new Car1("Thar");
car1.getBrand();
console.log(car1.brand);
// ts - Private
class Car2 {
    constructor(brand) {
        this.brand = brand;
    }
    getBrand() {
        console.log(this.brand);
    }
}
let car2 = new Car2("Thar");
car2.getBrand();
//console.log(car2.brand) // now brand is private
// ts - Protected
class Car3 {
    constructor(brand) {
        this.brand = brand;
    }
    getBrand() {
        console.log(this.brand);
    }
}
let car3 = new Car3("Thar");
car3.getBrand();
class CarC {
    constructor(brand, model, release) {
        this.brand = brand;
        this.model = model;
        this.release = release;
    }
}
//* Generics ----------
function gen(a, b) {
    return [a, b];
}
console.log(gen("3", "2"));
console.log(gen(3, 2));
console.log(gen([3], [5]));
//* exp
function addUser(user) {
    return user.id;
}
//* any type
function noRestrictions(a, b) {
    return a + b;
}
