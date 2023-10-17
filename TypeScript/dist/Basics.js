"use strict";
const func = (m, n) => {
    return m + n;
};
const mode = "dark"; // "light"// only
//?-----------------------------------------------------
//! Array
const arr = ["ad", "dg"];
const arr2 = [23, 654];
const arr3 = [23, "dev", 45];
const info = {
    name: "Dev",
    age: 34,
    gender: true,
    id: 13,
    func: (m, d) => {
        return m * d;
    },
};
console.log(info.func(34, 45));
const myFunc = (a, b, l, p = 4) => {
    if (typeof l === "undefined")
        return a * b * p;
    return a * b * l * p;
};
//?--------------------------------------------------------
//! Function - Normal
const myNormalFunc = function myNormalFunc(a, b, l, p = 3) {
    if (typeof l === "undefined")
        return a * b * p;
    return a * b * l * p;
};
const restFunc = (...a) => {
    return a;
};
restFunc(345, 345, 546);
const getData = (product) => {
    product.name = "Iphone";
    // product.id ="mfkjrenjkrn"
    console.log(product);
};
const productOne = {
    name: "MacBook",
    stock: 34,
    price: 23454,
    id: "adef778hruyhfy34f37ruufh84h",
};
getData(productOne);
//! Never Type
const errorHandler = () => {
    throw new Error();
};
//?--------------------------------------------------------
//!  classes
/* class Player {
  private height = 34;
  public weight = 50;
  protected age = 20;
  constructor(height: number, weight: number, age: number) {
    this.height = height;
    this.weight = weight;
    this.age = age;
  }
  getHW() {
    return console.log("height", this.height);
  }
} */
class Player {
    constructor(id, height, weight, age) {
        this.id = id;
        this.height = height;
        this.weight = weight;
        this.age = age;
    }
    getData() {
        return {
            id: this.id,
            height: this.height,
            weigth: this.weight,
            age: this.age,
        };
    }
    //? getter function - get value without call
    get getAge() {
        return {
            age: this.age,
        };
    }
    //? setter function - set value
    set setWeight(val) {
        this.weight = val;
    }
}
const player1 = new Player("enefjn", 23, 64, 20);
console.log("player", player1.getData());
console.log("player", player1.getAge);
console.log("player", player1.weight);
player1.setWeight = 367;
console.log("player", player1.weight);
//console.log("player",player1.height)  // height is privet so only accessible within class 'player'
// console.log("player",player1.age)   // age is protected so only accessible within class 'player'  and its subclasses
//! sub class
class PlayerX extends Player {
    constructor(id, height, weight, age, interset) {
        super(id, height, weight, age);
    }
    getDataX() {
        return {
            id: this.id,
            // height:this.height , // height is privet so only accessible within class 'player'
            weigth: this.weight,
            age: this.age,
        };
    }
}
const playerx1 = new PlayerX("fjehvb", 34, 50, 32, true);
console.log("playerX", playerx1.getDataX());
console.log("playerX", playerx1.getData());
console.log("playerX", playerx1.getAge);
console.log("playerX", playerx1.weight);
class Product {
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.id = String(Math.random() * 100);
    }
    getId() {
        return this.id;
    }
}
const newPro = new Product("laptop", 3454, 435);
console.log(newPro.name);
console.log(newPro.price);
console.log(newPro.stock);
console.log(newPro.getId());
