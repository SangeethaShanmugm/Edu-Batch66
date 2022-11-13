// = // assignment
// == // compare the data
// === // compare data and datatype

var a = 10 // assignment
var b = "10"
var c = 20

var c  = a == b // 
console.log(c)

var c  = a === b // 
console.log(c)

var a  = "hello"
var b = "hi"

a == b // false
console.log(a === b )// false

a == c //  false
a === c // false

var a = true
var b = 1

console.log(a == b );

console.log(a === b );
a == b // true
a === b // false

a == c // false

var a = 10
var b = 20

a >  b // false
b > a // true
a >= b // 10 >= 20 ==> false
console.log(a>=b); // false
console.log(a<=b); // true

a!=b // true
a !== b // true

// Negation

var a  = true
!a // false

var b = false
!b // true

var a = 1
var b = 0

!a // false
!b // true

var a = -1
!a // false

var a = "hi"
!a // false

// ==> truthy --> Any number except 0 whether  +ve or -ve, true , any string
// ===> falsy --> 0, false, null, undefined 