console.log("Iniciando proceso...");

function hola(nombre, miCallback) {
  setTimeout(() => {
    console.log(`Hola ${nombre}!`);
    miCallback(nombre);
  }, 1000);
}

function adios(nombre, segundoCallback) {
  setTimeout(() => {
    console.log(`Adiós ${nombre}...`);
    segundoCallback();
  }, 1000);
}

hola("Diego", (nombre) => {
  adios(nombre, () => {
    console.log("Terminando proceso...");
  });
});
