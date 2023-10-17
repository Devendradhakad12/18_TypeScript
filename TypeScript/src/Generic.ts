//?-----------------------------------------------

//! Generics

interface Personn {
  name: string;
  age: number;
}
const functin = <T>(n: T): T => {
  return n;
};

const per1: Personn = {
  name: "dev",
  age: 23,
};
const ans = functin<Personn>(per1);

//* generic in array
const arr23: number[] = [];
const arrh: Array<number> = [];

//* other exp
const unionFunc = <T, U>(n: T, o: U) => {
  return { n, o };
};
const exps = unionFunc<number, string>(234, "345");
exps.n;
exps.o;

const unionFunc2 = <T, U extends T>(n: T, o: U) => {
  return { n, o };
};
const exps2 = unionFunc2<number, number>(234, 345);


//! Advance Exapmple
const userList: Personn[] = [
  {
    name: "dev",
    age: 234,
  },
  {
    name: "ajay",
    age: 234,
  },
  {
    name: "mahak",
    age: 234,
  },
];

const filterFunction = <T,Key extends keyof T> (arr: T[], key: Key, value: T[Key]) => {
  arr.filter((user) => user[key] === value);
};

const fp = filterFunction(userList, "name", "dev");
const fp2 = filterFunction(userList, "age", 234);
