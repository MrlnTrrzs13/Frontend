let numeroMaximo = 10;
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = "vez";
let maximoIntentos = 5;
while (numeroUsuario != numeroSecreto) {
  let numeroUsuario = parseInt(
    prompt(`Me indicas un número entre 1 y ${numeroMaximo} por favor:`)
  );

  console.log(numeroUsuario);

  if (numeroUsuario == numeroSecreto) {
    alert(
      //`Acertaste, el número: ${numeroUsuario}, lo hiciste en ${intentos} ${palabraVeces}.`
      `Acertaste, el número: ${numeroUsuario}, lo hiciste en ${intentos} ${
        intentos == 1 ? "vez" : "veces"
      }.`
    );
  } else {
    if (numeroUsuario > numeroSecreto) {
      alert("El número secreto es menor");
    } else {
      alert("El numero secreto es mayor");
    }
    //intentos = intentos + 1;
    intentos++;
    //palabraVeces = "veces";

    if (intentos > maximoIntentos) {
      alert(`Llegaste al número máximo de ${maximoIntentos} intentos`);
      break;
    }
  }
}
