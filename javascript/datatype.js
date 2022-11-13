console.log("Hello Everyone")
console.log("Hi 🥳😀😀🤣🤣🎇🎇🎆🎆")
console.log(4 + 5);

//Different ways to declare in JS

//var - you can redeclare and reassign 
//let - you cannot redeclare but can reassign
// const - you cannot redeclare not reassign

// var a ---> Declaration
// a = 10 ----> assigment

var a = 10; 
console.log(a);
console.log(typeof a)


let b = 10;
b = 20;
console.log(b) // 20
let c = b;
console.log("B is bigger", b)
console.log(c)

const x = 10;
z = x;
console.log(x)
console.log(z)

//Datatypes - number - 1,2, string = "hello", boolean-> true/false

var x1 = [ 3, 5, 6]
//Array of string - ["hello", "everyone"]
console.log(typeof x1)

console.log(typeof null) // object
console.log(typeof NaN) // number

var t3 = "abc" - 3;
console.log(t3)
console.log(typeof t3)

//1. ans - reason - NaN - Not a Number  - coz, we cant subtract a string
//2. ans - reason - Number - it's bcoz of mathematical operator


var y1 = 3;

var y2 = "5";
//Implicit coercion
console.log(y1 + y2); //35
console.log(y1 - y2); //-2

//Explicit coercion
console.log(y1 + parseInt(y2)) // 8
console.log(y1 + +y2)   

//1. ans - reason
//2. ans - reason
//Typecasting, coercion
//3 -> "3"
//"5"
//"3" + "5" -> "35"


var a = 11
a = 12
console.log(a)// 12

var g = "10";
var e = "20";
"1020"
parseInt(g)
10
parseInt(e)
20
parseInt(g) + parseInt(e)
30

var a = "10.15";
var z = "10.15";
parseInt(a)
10.15
parseInt(z)
10.15
parseInt(a) + parseInt(z)
20
parseFloat(a) + parseFloat(z)
20.03

var a = "hello"
parseInt(a)
NaN


//ES6
var a = "10.34"
var z = "20.11"
Number(a) + Number(z)
30.45

var a = "10";
var z = "20";
var g = Number(a) + Number(z)
console.log(g)

var a = "123hello"
var z = "hello123"
var g = "123hello456"

var x1 = parseInt(a)
console.log(x1)
var x2 = parseInt(z)
console.log(x2)
var x3 = parseInt(g)
console.log(x3)


var x1 = Number(a)
console.log(x1)
var x2 = Number(z)
console.log(x2)
var x3 = Number(g)
console.log(x3)

//true =1
//false =0
var a = true+true
console.log(a)
        //1  + 0 = 1
var a = true +false
console.log(a) // 1

10+true //11
//10+1 =11
var a = 1/false
console.log(a)

var a = "hi"+true
var z = "true" + "true"
var z1 = "true"- "true"
console.log(a)
console.log(z)
console.log(z1)

var a = "hi"
typeof(a) //string
var a = 10
typeof(a) // number
var a = true
typeof(a)// boolean

var a  = 5%2
console.log(a)

5%3 // 2
5%4 // 1
5%5 // 0
2%4 // 2
3%4 // 3

// string+string = string
// string+number = string
// number+string = string
// number+number = number

"10"+20+30
//"1020"+30
//"102030"

10+"20"+30
"1020"+30
"102030"

10+20+"30"
30+"30"
"3030"

"10"+20+30-1
102029

10+"20"+30-1
102029

var s = (10+20+"30"-1)
console.log(s) //3029

"10"*20
200

"10"/20
0.5

"10a"-1
//NaN

"10"-1
9

10-"1"
9

10-"1a"
NaN

"20"*"5"
100
"20a"*"5"
NaN
