// Array is collection of homogenious as well as heterogenius data types
// [1,2,3,3,4], ['hello',"world"] => homogenious
// [1,2,"hello",'h',12.560, true] => heterogenius

// let a  = ["Hiii","Hello","test", 'code',`Hey`] ==>Array of strings
// let b = [4,45,23,45,78,1,4] => Array of Numbers
// let c  = [true, false, true, false] => Array of boolean

let d  = ["Hii", 56, true, 2145, false, "hey"]

var a  = [4,5,6,7]
console.log(typeof(a))
//object

var city = ["Delhi","Mumbai","London","Lucknow"]
console.log(city[0]);//"Delhi"
city[1] //Mumbai
//push - is going to add string at end of the array
console.log(city.push('Boston'))
// ["Delhi","Mumbai","London","Lucknow","Boston"]
console.log(city.push("Venice"));
//pop - last element will be removed
var city = ["Delhi","Mumbai","London","Lucknow","Boston","Venice"]
city.pop()
//'Venice
console.log(city.pop());

var city = ["Delhi","Mumbai","London","Lucknow","Boston","Venice"]
console.log(city.unshift('Dubai'))
//"Dubai,"Delhi","Mumbai","London","Lucknow","Boston","Venice"
var city = ["Delhi","Mumbai","London","Lucknow","Boston","Venice"]
console.log(city.shift('Dubai'))

// push => add in the end of Array
// pop => remove last value always
// unshift => add as first value in array
// shift => remove first value always

var a = ['Dubai', 'Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Boston', 'Venice']
console.log(a.slice(1));
//['Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Boston', 'Venice']
console.log(a.slice(2));
// [ 'Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Boston', 'Venice']
console.log(a.slice(2,5));
// ['Mumbai', 'Helsinki', 'London']
console.log(a.slice(0,-2));
//['Dubai', 'Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam']

var a = ['Dubai', 'Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Boston', 'Venice']
// a.splice(startIndex, DeleteCount, Values)
//remove 2 values from index number 2
console.log(a.splice(2,2));
//['Mumbai', 'Helsinki']


//remove no value but add   2 values on index 3
console.log(a.splice(3, 0, 'Pune', 'Nice'))
//['Dubai', 'Delhi', 'London', 'Pune', 'Nice', 'Amsterdam', 'Boston', 'Venice']

//remove  1 value on index 1 and add 2 values
console.log(a.splice(1,1,"Innsburg","Paris"))
//['Dubai', 'Innsburg','Paris', 'London', 'Pune', 'Nice', 'Amsterdam', 'Boston', 'Venice']

var a = ['Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Boston', 'Venice']

a.indexOf('London')
//3

a.indexOf('Delhi')
// 0

console.log(a.indexOf('Pune'));
// -1

a.indexOf('Boston')
//5

var c  = ['a','b','c',1]

var b = [2, 'd','e','f']
console.log(c + b);
//'a','b','c',1 + 2, 'd','e','f'
//'a,b,c,12,d,e,f
console.log(c.concat(b));
//['a', 'b', 'c', 1, 2, 'd', 'e', 'f']

console.log(b.concat(c));
//[2, 'd', 'e', 'f', 'a', 'b', 'c', 1]

