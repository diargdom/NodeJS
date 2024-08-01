const { exec, spawn } = require("child_process");

// exec("node modulos/consola.js", (err, stdout, sterr) => {
//   if (err) {
//     console.error(err);
//     return false;
//   }

//   console.log(stdout);
// });

let proceso = spawn("powershell.exe", ["/c", "dir"]);
console.log("🚀 ~ proceso:", proceso.pid);
console.log("🚀 ~ proceso:", proceso.connected);

proceso.stdout.on("data", (dato) => {
  console.log("¿Está muerto?");
  console.log(process.killed);
  console.log(dato.toString());
});

proceso.on("Exit", () => {
  console.log("El proceso terminó");
  console.log(proceso.killed);
});
