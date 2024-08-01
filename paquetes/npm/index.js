// const isOdd = require("is-odd");

// console.log(isOdd(2));

// function encontrarNumero(numero) {
//   if (numero.length !== 0) {
//     return Math.max(...numero);
//   } else {
//     return "No hay numeros en el array";
//   }
// }
// const arrayDeNumeros = [1, 2, 3, 4, 10, 20];
// console.log(encontrarNumero(arrayDeNumeros));

function palindromo(cadena) {
  const cadenaNormal = cadena.toLowerCase();

  const cadenaInvertida = cadenaNormal.split("").reverse().join("");

  return cadenaNormal === cadenaInvertida;
}

console.log(palindromo("reconocer"));
