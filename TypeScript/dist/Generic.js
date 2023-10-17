"use strict";
//?-----------------------------------------------
const functin = (n) => {
    return n;
};
const per1 = {
    name: "dev",
    age: 23,
};
const ans = functin(per1);
//* generic in array
const arr23 = [];
const arrh = [];
//* other exp
const unionFunc = (n, o) => {
    return { n, o };
};
const exps = unionFunc(234, "345");
exps.n;
exps.o;
const unionFunc2 = (n, o) => {
    return { n, o };
};
const exps2 = unionFunc2(234, 345);
//! Advance Exapmple
const userList = [
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
const filterFunction = (arr, key, value) => {
    arr.filter((user) => user[key] === value);
};
const fp = filterFunction(userList, "name", "dev");
const fp2 = filterFunction(userList, "age", 234);
