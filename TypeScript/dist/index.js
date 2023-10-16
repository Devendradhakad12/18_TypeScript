"use strict";
const func = (m, n) => {
    return m + n;
};
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
    console.log(product);
};
