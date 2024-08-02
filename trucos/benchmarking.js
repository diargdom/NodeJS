console.time("Todo");
let suma = 0;
console.time("bucle 1");
for (let i = 0; i < 100000000; i++) {
  suma += 1;
}
console.timeEnd("bucle 1");

let suma2 = 0;
console.time("bucle 2");
for (let j = 0; j < 1000000000; j++) {
  suma += 1;
}
console.timeEnd("bucle 2");

console.log("Empieza el proceso async");
console.time("asincrono");
asincrona().then(() => {
  console.timeEnd("asincrono");
});

console.timeEnd("Todo");
function asincrona() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Termina el proceso asincrono");
      resolve();
    });
  });
}
