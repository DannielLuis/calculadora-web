//
/*
window.onload = function(){
    document.getElementById("display").value="45";
}*/

const btn1 = document.querySelector("[value='1']");
const btn2 = document.querySelector("[value='2']");
const btn3 = document.querySelector("[value='3']");
const btn4 = document.querySelector("[value='4']");
const btn5 = document.querySelector("[value='5']");
const btn6 = document.querySelector("[value='6']");
const btn7 = document.querySelector("[value='7']");
const btn8 = document.querySelector("[value='8']");
const btn9 = document.querySelector("[value='9']");
const btn0 = document.querySelector("[value='0']");

//console.log(btn);

function limpar(){
    document.getElementById('display').value=''
}

function addNumber(valor){
    if(valor === 7){
        document.getElementById('display').value += 7
    }
}

btn1.addEventListener("click", () => console.log("Testando botão "+btn1.value));
btn2.addEventListener("click", () => console.log("Testando botão "+btn2.value));
btn3.addEventListener("click", () => console.log("Testando botão "+btn3.value));
btn4.addEventListener("click", () => console.log("Testando botão "+btn4.value));
btn5.addEventListener("click", () => console.log("Testando botão "+btn5.value));
btn6.addEventListener("click", () => console.log("Testando botão "+btn6.value));
btn7.addEventListener("click", () => console.log("Testando botão "+btn7.value));
btn8.addEventListener("click", () => console.log("Testando botão "+btn8.value));
btn9.addEventListener("click", () => console.log("Testando botão "+btn9.value));
btn0.addEventListener("click", () => console.log("Testando botão "+btn0.value));
