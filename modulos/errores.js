function otrfuncion() {
  serompe();
}

function serompe() {
  return 3 + Z;
}

function seRompeAsincrona(cb) {
  setTimeout(() => {
    try {
      return 3 + Z;
    } catch (error) {
      console.error(`Error en mi función asíncrona: ${error}`);
      cb(error);
    }
  });
}
try {
  seRompeAsincrona((err) => {
    console.log(err.message);
  });
} catch (error) {
  console.error(`Vaya, algo se ha roto ${error}`);
  console.error(error);
}
