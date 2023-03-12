//
/*
window.onload = function(){
    document.getElementById("display").value="45";
}*/

const btn = document.querySelector("[value='8']");

console.log(btn);

function limpar(){
    document.getElementById('display').value=''
}

function addNumber(valor){
    if(valor === 7){
        document.getElementById('display').value += 7
    }
}

btn.addEventListener("click", () => {
    alert("Testando botão 8")
})