

function calc(opt) {
    let a  = document.getElementById('first').value;
    let b  = document.getElementById('second').value;
    let out;
    if(opt == "Add") {
        out = `Sum of number is ${Number(a) + Number(b)}`
    }else{
        out = `Sum of number is ${Number(a) - Number(b)}`
    }
    document.getElementsByClassName('output')[0].innerText=out
}