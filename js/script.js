//
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

const mais = document.querySelector("[value='+']");
const menos = document.querySelector("[value='-']");
const multiplica = document.querySelector("[value='X']");
const iqual = document.querySelectorAll("button")[4];

// Constantes da caixa de alerta
const containerAlerta1 = document.querySelector(".container__alerta__1");
const containerAlerta2 = document.querySelector(".container__alerta__2");
const botaoFecharAlerta1 = document.querySelector(".botao__fechar_alerta_1");
const botaoFecharAlerta2 = document.querySelector(".botao__fechar_alerta_2");

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
    }else{
        //console.log("A variavel num1 guarda o valor: " + num1);
        document.getElementById('display').value='';
        num1 = num1+num2;
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
});

mais.addEventListener("click", () => {
    addOperador("+");
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