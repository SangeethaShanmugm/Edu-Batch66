// if(condition) {

// }else {

// }

let a = 20;
if(a%2 == 0) {
    console.log(`Number ${a} is even`)
}else {
    console.log(`Number ${a} is odd`)
}


// let uname = "Ami"
// if(uname == "John") {
//     console.log(`Hi ${uname} you are admin`)
// }else if(uname=="Jack") {
//     console.log(`Hi ${uname} you are super admin`)
// } else {
//     console.log(`Hi ${uname} is unknown`)
// }


let uname = "Jack"
let role = "Admin1";
if(role == "Admin") {
    if(uname == "John") {
        console.log(`Hi ${uname} you are admin`)
    } else {
        console.log(`Hi ${uname} is unknown`)
    }
} else {
    if(uname == "Ami") {
        console.log(`Hi ${uname} you are super admin`)
    } else {
        console.log(`Hi ${uname} is unknown`)
    }
}

//ternary operator( single line if else)

// condition ? if condition is true   : if condition is false


var b = 10
b > 10 ? "Hi" : "hello"
"hello"

var b = 10
b === 10 ? "Hi" : "Hello"

// == -> check only value 
// === -> check value and datatype

var b = 10
b > 10 ? b+1 : b-1

var b = 10
b == 10 ? b+1 : b-1
