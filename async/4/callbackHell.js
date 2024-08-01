function hola(nombre, miCallback) {
  setTimeout(() => {
    console.log(`Hola ${nombre}!`);
    miCallback(nombre);
  }, 1000);
}

function hablar(callbackHablar) {
  setTimeout(() => {
    console.log("Bla bla bla bla...");
    callbackHablar();
  }, 1000);
}

function adios(nombre, segundoCallback) {
  setTimeout(() => {
    console.log(`Adiós ${nombre}...`);
    segundoCallback();
  }, 1000);
}

function conversacion(nombre, veces, callbackConversa) {
  if (veces > 0) {
    hablar(() => {
      conversacion(nombre, --veces, callbackConversa);
    });
  } else {
    adios(nombre, callbackConversa);
  }
}

// --
console.log("Iniciando proceso...");
hola("Diego", (nombre) => {
  conversacion(nombre, 3, () => {
    //funcion recursiva
    console.log(`Proceso terminado`);
  });
});

// hola("Diego", (nombre) => {
//   hablar(() => {
//     hablar(() => {
//       adios(nombre, () => {
//         console.log("Terminando proceso...");
//       });
//     });
//   });
// });
