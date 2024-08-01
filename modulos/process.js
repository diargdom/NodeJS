process.on("beforeExit", () => {
  console.log("el proceso va a terminar");
});

process.on("exit", () => {
  console.log("Ale, el proceso acabó");
});

setTimeout(() => {
  console.log("Esto se va a ver");
}, 0);
process.on("uncaughtExcecption", (err, origen) => {
  console.error("Vaya, se nos ha olvidado capturar un error");
  setTimeout(() => {
    console.log("Esto viene desde las excepciones");
  }, 0);
});
//process.on("uncaughtRejecption");

funcionQueNoExiste();

console.log("Esto si el error no se recoje, no sale");
