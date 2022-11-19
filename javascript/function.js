var a = 10
var b = 20
a + b 
30
//ES5
// keyword nameoffunction(parameters){
//     return output 
// }

function add(a, b) {
    return a+b
}

console.log(add(1, 2));
// add(1, 2)
console.log(add(5, 5));
console.log(add(15, 15));

function isEven(userInput) {
    let out;
    if(userInput%2 == 0){
        out = `Number ${userInput} is even`
    }
    else {
        out = `Number ${userInput} is odd`
    }
    return out
}
console.log(isEven(5))
console.log(isEven(4))

// es5
// function add(a, b) {
//     return a+b
// }

//ES6
//Arrow function =>

let addNum = (a, b) => {return a+b}