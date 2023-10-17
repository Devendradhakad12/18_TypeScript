//! Type alisas
type UserName = (n: number, m: number) => Number;
const func: UserName = (m, n) => {
  return m + n;
};

type themeMode = "light" | "dark";
const mode: themeMode = "dark"; // "light"// only

//?-----------------------------------------------------

//! Array
const arr: string[] = ["ad", "dg"];
const arr2: Array<number> = [23, 654];
const arr3: [number, string, number] = [23, "dev", 45];

//?-----------------------------------------------------

//! object with interface
type FuncType = (m: number, d: number, l?: number) => number;

interface infoObj {
  name: string;
  age: number;
  gender?: boolean;
}
interface NewObj extends infoObj {
  id: number;
  func: FuncType;
}
const info: NewObj = {
  name: "Dev",
  age: 34,
  gender: true,
  id: 13,
  func: (m, d) => {
    return m * d;
  },
};
console.log(info.func(34, 45));

//?--------------------------------------------------------

//! Functions - Aerrow
type myFuncType = (m: number, d: number, p: number, l?: number) => number;
const myFunc: myFuncType = (a, b, l, p = 4) => {
  if (typeof l === "undefined") return a * b * p;
  return a * b * l * p;
};

//?--------------------------------------------------------

//! Function - Normal
const myNormalFunc: myFuncType = function myNormalFunc(a, b, l, p = 3) {
  if (typeof l === "undefined") return a * b * p;
  return a * b * l * p;
};

//?--------------------------------------------------------

//! Rest operator
type restType = (...a: number[]) => number[];
const restFunc: restType = (...a) => {
  return a;
};
restFunc(345, 345, 546);

//?--------------------------------------------------------

//!  Function with object

interface ProductInterface {
  name: string;
  stock: number;
  price: number;
  readonly id: string;
}

type GetDataType = (product: ProductInterface) => void;

const getData: GetDataType = (product) => {
  product.name = "Iphone";
  // product.id ="mfkjrenjkrn"
  console.log(product);
};

const productOne: ProductInterface = {
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
  constructor(
    readonly id: string,
    private height: number,
    public weight: number,
    protected age: number
  ) {}
  getData() {
    return {
      id: this.id,
      height: this.height,
      weigth: this.weight,
      age: this.age,
    };
  }

  //? getter function - get value without call
  get getAge(): object {
    return {
      age: this.age,
    };
  }

  //? setter function - set value
  set setWeight(val: number) {
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
  constructor(
    id: string,
    height: number,
    weight: number,
    age: number,
    interset: boolean
  ) {
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

//?--------------------------------------------------------

//! class with interface

interface ProductType {
  name: string;
  stock: number;
  price: number;
}
interface giveId {
  getId: () => string;
}

class Product implements ProductType , giveId {
  private id: string = String(Math.random() * 100);

  constructor(
    public name: string,
    public price: number,
    public stock: number
  ) {}

  getId(): string {
    return this.id;
  }
}

const newPro = new Product("laptop", 3454, 435);
console.log(newPro.name);
console.log(newPro.price);
console.log(newPro.stock);
console.log(newPro.getId());
