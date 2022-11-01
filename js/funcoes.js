window.onload = function(){
    document.getElementById("display").value="45";
}

function limpar(){
    document.getElementById('display').value=''
}

function addNumber(valor){
    if(valor === 7){
        document.getElementById('display').value += 7
    }
}