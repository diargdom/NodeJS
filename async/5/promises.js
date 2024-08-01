function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Hola ${nombre}!`);
      resolve(nombre);
    }, 1000);
  });
}

function hablar(nombre) {
  return new Promise((resolve, rej) => {
    setTimeout(() => {
      console.log("Bla bla bla bla...");
      //resolve(nombre);
      rej("Hay un error");
    }, 1000);
  });
}

function adios(nombre) {
  return new Promise((resolve, rej) => {
    setTimeout(() => {
      console.log(`Adiós ${nombre}...`);
      resolve(nombre);
    }, 1000);
  });
}

// ---
console.log("Iniciando el proceso...");

hola("Alejandro")
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then((nombre) => {
    console.log("Terminado el proceso");
  })
  .catch((error) => {
    console.error(`Ha habido un error: ${error}`);
  });
