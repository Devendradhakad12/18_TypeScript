//! Type Assertion

//const btn = document.getElementById("btn") as HTMLElement
//const btn = document.getElementById("btn")!;  //not null
const btn = <HTMLElement>document.getElementById("btn");
btn?.onclick;

const img = <HTMLImageElement>document.getElementById("img");
img.src;

const img2 = document.querySelector("img")!;
img2?.src;

//?---------------------------------------------

//! form
const form = <HTMLFormElement>document.getElementById("myform");
const myinput = <HTMLInputElement>document.querySelector("form > input");

form.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();
  const value = Number(myinput.value);
  console.log(myinput.value);
  console.log(typeof value);
  console.log(typeof myinput.value);
  const h2 = document.createElement("h2");
  h2.textContent = String(value + 20);
  form.appendChild(h2);
};

