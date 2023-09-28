//
/*const btn1 = document.querySelector("[value='1']");
const btn2 = document.querySelector("[value='2']");
const btn3 = document.querySelector("[value='3']");
const btn4 = document.querySelector("[value='4']");
const btn5 = document.querySelector("[value='5']");
const btn6 = document.querySelector("[value='6']");
const btn7 = document.querySelector("[value='7']");
const btn8 = document.querySelector("[value='8']");
const btn9 = document.querySelector("[value='9']");
const btn0 = document.querySelector("[value='0']");*/

// A nova constante que contem todos botões numericos
const dataClick = document.querySelectorAll('[dataClick]');

/*
window.onload = function(){
    console.log(dataClick.length);
    console.log(typeof dataClick);
    console.log(dataClick[0]);
    console.log(dataClick[0].value);
}*/

const mais = document.querySelector("[value='+']");
const menos = document.querySelector("[value='-']");
const multiplica = document.querySelector("[value='X']");
const iqual = document.querySelectorAll("button")[4];

// Constantes da caixa de alerta
const containerAlerta1 = document.querySelector(".container__alerta__1");
const containerAlerta2 = document.querySelector(".container__alerta__2");
const botaoFecharAlerta1 = document.querySelector(".botao__fechar_alerta_1");
const botaoFecharAlerta2 = document.querySelector(".botao__fechar_alerta_2");

const containerAlertaTestes = document.querySelector(".container__alerta__testes");
const botaoFecharAlertaTestes = document.querySelector(".botao__fechar_alerta_testes");

//console.log(iqual);
let num, num1, operador = 0;
var result = 0;
var num2 = 0;
var execut = false

// Adicionar o numero clicado no display
function addNumero(valor){
    if(execut){
        document.getElementById('display').value += valor
        num2 = parseInt(num2+=valor)
    }else{
        document.getElementById('display').value += valor
        num1 = document.getElementById('display').value
        num1 = parseInt(num1)
    }
}

// Adiciona o operador no display
function addOperador(operad){
    num2 = 0
    operador = operad
    document.getElementById('display').value += operad
    execut = true
    console.log(operador)
}

// Processa o resultado
function resultado(){
    if(num1 == NaN || num1 == undefined || num1 == 0){
        //console.log("A variavel num1 esta vazia!");
        containerAlerta2.classList.toggle("fechar");
        limpar()
    }else if(num2 == NaN || num2 == undefined || num2 == 0){
        containerAlerta2.classList.toggle("fechar");
        limpar()
    }else if(operador == "+"){
        //console.log("A variavel num1 guarda o valor: " + num1);
        document.getElementById('display').value='';
        num1 = num1 + num2;
        document.getElementById('display').value=num1;
    }else if(operador == "-"){
        //alerta("O operador é -");
        document.getElementById('display').value='';
        num1 = num1 - num2;
        document.getElementById('display').value=num1;
    };
};

//Limpa o display
function limpar(){
    document.getElementById('display').value=''
    num1 = 0
    num2 = 0
    operador = 0
    execut = false
    window.console.clear()
}

// Alerta de testes
function alerta(msg){
    const containerAlerta = document.querySelector("#testes .alerta p");
    console.log(containerAlerta);
    containerAlerta.innerHTML = `${msg}.`
    containerAlertaTestes.classList.toggle("fechar");
};

// Aqui são os novos eventos dos botões
dataClick[0].addEventListener("click", () => { addNumero("7") });
dataClick[1].addEventListener("click", () => { addNumero("8") });
dataClick[2].addEventListener("click", () => { addNumero("9") });
dataClick[3].addEventListener("click", () => { addNumero("4") });
dataClick[4].addEventListener("click", () => { addNumero("5") });
dataClick[5].addEventListener("click", () => { addNumero("6") });
dataClick[6].addEventListener("click", () => { addNumero("1") });
dataClick[7].addEventListener("click", () => { addNumero("2") });
dataClick[8].addEventListener("click", () => { addNumero("3") });
dataClick[9].addEventListener("click", () => { addNumero("0") });

/*
btn1.addEventListener("click", () => {
    addNumero(btn1.value);
});
btn2.addEventListener("click", () => {
    addNumero(btn2.value);
});
btn3.addEventListener("click", () => {
    addNumero(btn3.value);
});
btn4.addEventListener("click", () => {
    addNumero(btn4.value);
});
btn5.addEventListener("click", () => {
    addNumero(btn5.value);
});
btn6.addEventListener("click", () => {
    addNumero(btn6.value);
});
btn7.addEventListener("click", () => {
    addNumero(btn7.value);
});
btn8.addEventListener("click", () => {
    addNumero(btn8.value);
});
btn9.addEventListener("click", () => {
    addNumero(btn9.value);
});
btn0.addEventListener("click", () => {
    addNumero(btn0.value);
});*/

mais.addEventListener("click", () => {
    addOperador("+");
});

menos.addEventListener("click", () => {
    addOperador("-");
    //alerta("Testando botão de subtração")
});

iqual.addEventListener("click", () => {
    console.log("O primeiro numero é " + num1);
    console.log(typeof num1)
    console.log("Operador é " + operador);
    console.log("O segundo numero é " + num2);
    console.log(typeof num2)
    resultado();
});

// Evento do botão fechar caixa de alerta
botaoFecharAlerta1.addEventListener("click", () => {
    containerAlerta1.classList.toggle("fechar");
    //console.log("Testando btn")
});

botaoFecharAlerta2.addEventListener("click", () => {
    containerAlerta2.classList.toggle("fechar");
});

botaoFecharAlertaTestes.addEventListener("click", () => {
    containerAlertaTestes.classList.toggle("fechar");
});