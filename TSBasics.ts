//* Exp -1  ----------
let num: number = 5;
num = 34;
//num = "dev"  // we can assign only number
console.log(num + 54);

//* Exp -2  -----------
const names: string[] = [];
names.push("dev");
//names.push(1) // we can insert only string

//* Exp -3  ---------
function sum(a: number, b: number): number {
  return a + b;
}
console.log(3 + 4);

//* Exp -4 - Tuples  -------
let address: [number, string, number];
address = [111, "indore", 24445];

//* Exp -5  --------
let person: { name: string; age?: number }; // age is optional
person = { name: "john" };
let anPerson: { name: string; age: number }; // age is required
anPerson = { name: "john", age: 45 };

//* Exp -6 -------
function add(a: string, b?: string) {
  return b ? a + b : a;
}
console.log("1" + "3");

//* interface ------
interface Person {
  name: string;
  id: number;
  age: number;
}

let p: Person;
p = { name: "def", age: 35, id: 345 };

interface Student {
  name: string;
  roll: number;
  age: number;
}

let p1: Person | Student; // Union
p1 = { name: "jack", age: 34, id: 34 }; // roll or id optional

let p2: Person & Student; // InterSection
p2 = { name: "jack", age: 34, id: 34, roll: 34 }; // roll and id required

//* Type alias -------
type Count = string | number;
let c: Count;
c = 1;
c = "21";
// c = true // Boolean is not allow only number and string can be assign

//* Type Naver  ----
type Count1 = string & number;
let c1: Count1;
//c1 = true
//c1 = "34"
//c1 = 32 // Nothing is assignable to type 'nave

//* Naver Array  ---
let arr: [] = [];
//arr.push("rfvt")  // Nothing pushed in type never array

//* Class
//in js
class Car {
  brand;
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
  constructor(public brand) {}
  getBrand() {
    console.log(this.brand);
  }
}

let car1 = new Car1("Thar");
car1.getBrand();
console.log(car1.brand);

// ts - Private
class Car2 {
  constructor(private brand) {}
  getBrand() {
    console.log(this.brand);
  }
}

let car2 = new Car2("Thar");
car2.getBrand();
//console.log(car2.brand) // now brand is private

// ts - Protected
class Car3 {
  constructor(protected brand) {}
  getBrand() {
    console.log(this.brand);
  }
}
let car3 = new Car3("Thar");
car3.getBrand();
//console.log(car3.brand) // brand is protected and only accessible within class 'car3'

//* implements -----------
interface Icar {
  brand: string;
  model: string;
}
interface Icar2 {
release : number;
}
class CarC implements Icar , Icar2{
  constructor(public brand, public model, public release) {}
}


//* Generics ----------
function gen<T>(a:T,b:T){
return [a,b]
}

console.log(gen<string>("3","2"))
console.log(gen<number>(3,2));
console.log(gen<Array<number>>([3],[5]));

//* exp
function addUser<T extends{id:string}>(user:T){
    return user.id
}

//* any type
function noRestrictions(a:any,b:any):any{
    return a+b

}