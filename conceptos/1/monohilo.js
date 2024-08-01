console.log("Hola mundo");

let i = 0;

setInterval(() => {
  //El setInterval hace que la funcion sea asincrona
  console.log(i);
  i++;

  if (i === 5) {
    console.log("forzamos error");
    var a = i + z;
  }
}, 1000);

console.log("Segunda instrucción");
