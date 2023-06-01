//Pedir entrada apropiada
//Convertir frase a Array
//Identificar coincidencias en el array con la entrada letra








function cuentaLetras(frase, letra) {
let letrasFrase = frase.split('');
let posicion = 0;
for (let x=0; x < letrasFrase.length; x++) {
  if (letrasFrase[x] === letra) {
    posicion++;
  }
}
return posicion;
}

let frase = "He pasado por tu casa veinte veces";
let letraSolucion = "p";
let numeroVeces = cuentaLetras(frase, letraSolucion);
console.log(numeroVeces);