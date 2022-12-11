//ES5 and ES6

//scope - lifetime of a variable
// let, const - block scope
//{} - block
// var - function
{
  let y1 = 10;
  var y2 = 20;
}

// console.log(y1);
console.log(y2);

// not defined (error)
// undefined(value)

function getPrice() {
  var price = 1000;
  var price = 500;
  console.log("The old price is", price); // 1000
  console.log("The new price is ", price); // 1000
}

getPrice();

console.log(a);
//1000 lines
var a = 50;
console.log(a);

//JS - Does compilation happens? Yes
// JIT - Just In Time Compilation
// code -> binary(byte code)

//1.compilation Phase
// 2. Execution Phase
// 2things  - JS, Context

//ex 1
//1.compilation Phase
console.log(a); //skip
var a = 50; // JS  -> Do you know a ? No | What is value? -> context -> undefined
console.log(a); //skip

// 2. Execution Phase

console.log(a); // JS  -> Do you know a ? Yes | What is value? -> context  - undefined
var a = 50; // JS  -> Do you know a ? Yes | Note down -> context -> a = 50
console.log(a); // JS  -> Do you know a ? Yes | What is value? -> 50

// ex 2

//1.compilation Phase
console.log(a1); //skip
let a1 = 50; // JS  -> Do you know a1? No | What is value? -> context -  dont initialize
console.log(a1); //skip

// 2. Execution Phase
console.log(a1); // JS  -> Do you know a1 ? yes | What is the value? -> context -Error
let a1 = 50;
console.log(a1);
