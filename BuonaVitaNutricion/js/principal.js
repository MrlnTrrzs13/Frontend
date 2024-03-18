var paciente = document.querySelector("#primer-paciente");

var peso = paciente.querySelector(".info-peso").textContent;

var altura = paciente.querySelector(".info-altura").textContent;

var tdIMC = paciente.querySelector(".info-imc");
var imc = peso / (altura * altura); 
tdIMC.textContent = imc;

if ((peso < 0) || (peso > 1000)) {
    console.log("Peso Incorrecto.");
}

if ((altura < 0) || (altura > 4.00)) {
    console.log("Altura Incorrecta.");
}