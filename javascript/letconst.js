// var -> we can redeclare and reassign
// let -> we cannot redeclare but can reassign
// const -> we cannot redeclare nor reassign

var a  = 10

// var a -> Declaration
// a = 10 -> assignment

var a = 10
a // 10

var a = 11
var a = 12
a // 12
console.log(a)


let c = 11
 c = 12
a // 12
console.log(c)