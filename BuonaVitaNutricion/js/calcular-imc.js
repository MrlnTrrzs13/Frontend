var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    var tdIMC = paciente.querySelector(".info-imc");

    pesoEsValido = true;
    alturaEsValida = true;

    if ((peso < 0) || (peso > 1000)) {
        console.log("Peso Incorrecto.");
        tdIMC.textContent = "Peso Incorrecto";
        pesoEsValido = false;
        paciente.classList.add("paciente-incorrecto");
    }
    
    if ((altura < 0) || (altura > 4.00)) {
        console.log("Altura Incorrecta.");
        tdIMC.textContent = "Altura Incorrecta";
        alturaEsValida = false;
        paciente.classList.add("paciente-incorrecto");
    }
    
    if (pesoEsValido && alturaEsValida) {
        var imc = peso / (altura * altura); 
        tdIMC.textContent = imc.toFixed(2);
}

function calcularIMC(peso, altura) {
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}

}