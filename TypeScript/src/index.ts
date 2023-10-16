//! Type alisas
type UserName = (n: number, m: number) => Number;
const func: UserName = (m, n) => {
  return m + n;
};

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
const myNormalFunc:myFuncType = function myNormalFunc(a,b,l,p=3){
    if (typeof l === "undefined") return a * b * p;
    return a * b * l * p; 
}


//?--------------------------------------------------------

//! Rest operator
type restType = (...a:number[]) => number[];
const restFunc : restType = (...a) =>{
    return a
}
restFunc(345,345,546)

//?--------------------------------------------------------

//!  Function with object

type GetDataType = (product:{name:string,stock:number,price:number}) => void

const getData :GetDataType = (product) =>{
  console.log(product)
}