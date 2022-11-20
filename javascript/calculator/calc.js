function add(){
    let a  = document.getElementById('first').value;
    let b  = document.getElementById('second').value; 
    let out = Number(a) + Number(b)
    document.getElementsByClassName('output')[0].innerText=`Sum of number is ${out}`
}


function sub(){
    let a  = document.getElementById('first').value;
    let b  = document.getElementById('second').value; 
    let out = Number(a) - Number(b)
    document.getElementsByClassName('output')[0].innerText=`Sum of number is ${out}`
}



//DRY - Do not repeat yourself

function calc(option) {
    let a  = document.getElementById('first').value;
    let b  = document.getElementById('second').value;
    let out;
    if(option == "Add") {
        out = `Sum of number is ${Number(a) + Number(b)}`
    }else{
        out = `Sum of number is ${Number(a) - Number(b)}`
    }
    document.getElementsByClassName('output')[0].innerText=out
}