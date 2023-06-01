
//Pedir entrada apropiada: frase y letra
//Convertir frase a elementos de un Array. Usar método split()???
//Recorrer array e identificar coincidencias con entrada letra
//Crear un contador que aunmente en 1 ++ cada vez que se produzca un conteo positivo
//Devolver contador
//Introducir datos e invocar función con console.log()

function cuentaLetras(frase, letra) {
let arrayLetras = frase.split("");
let letrasEncontradas = 0;
for (let x=0; x < arrayLetras.length; x++) {
  if (arrayLetras[x] === letra) {
    letrasEncontradas++;
  }
}
return letrasEncontradas;
}
let frase = "Mi carro me lo robaron estando de romeria, ¿donde estará mi carro";
let letra = "r";
console.log(cuentaLetras(frase, letra));








