const nombre = process.env.NOMBRE || "Alejandro";
const apellido = process.env.APELLIDO || "Argumedo";
const web = process.env.WEB || "No tengo web";
console.log(`Hola ${nombre}`);
console.log(`Mi web es: ${web}`);
console.log(`Mi apellido es: ${apellido}`);
