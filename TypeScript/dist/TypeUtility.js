"use strict";
//?---------------------------------------------
const myObj = {
    name: "wefg",
    email: "wew@ejk.com",
};
const getPersonData = (key) => {
    return myObj[key];
};
console.log(getPersonData("email"));
let key = "name";
myObj[key];
myObj[key];
const User2 = {};
//? #2 Required<Type> -- opposite of partial
const User3 = {
    name: "dev",
    email: "er",
};
//? #3 Readinly<Type> -- makes every property readonly
const user = {
    name: "dev",
    email: "wdefrt",
};
//? #10  Parameters<Type> -- return parameters of a function in array
const myFunction = (a, b) => {
    console.log(a + b);
    return a + b;
};
//? #11 ConstructorParameters<Type> -- it returns constructr paramerters as an array
class smapleClass {
    constructor(s, t) {
        this.s = s;
        this.t = t;
    }
}
const userrr = {
    s: "fg",
    t: "df",
};
