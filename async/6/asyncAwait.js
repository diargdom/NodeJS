async function hola(nombre) {
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
      resolve(nombre);
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

async function main() {
  let nombre = await hola("Alejandro");
  await hablar();
  await hablar();
  await hablar();
  await adios(nombre);
  console.log("Terminamos el proceso");
}
console.log("Empezamos el proceso");
main();
