"use strict";
//! Type Assertion
//const btn = document.getElementById("btn") as HTMLElement
//const btn = document.getElementById("btn")!;  //not null
const btn = document.getElementById("btn");
btn?.onclick;
const img = document.getElementById("img");
img.src;
const img2 = document.querySelector("img");
img2?.src;
//?---------------------------------------------
//! form
const form = document.getElementById("myform");
const myinput = document.querySelector("form > input");
form.onsubmit = (e) => {
    e.preventDefault();
    const value = Number(myinput.value);
    console.log(myinput.value);
    console.log(typeof value);
    console.log(typeof myinput.value);
    const h2 = document.createElement("h2");
    h2.textContent = String(value + 20);
    form.appendChild(h2);
};
