const fs = require("fs");
//const { Transform } = require("stream");
const stream = require("stream");
const util = require("util");

let data = "";

let readableStream = fs.createReadStream(__dirname + "/input.txt");
readableStream.setEncoding("utf-8");

// readableStream.on("data", (chunk) => {
//   data += chunk;
// });

// readableStream.on("end", () => {
//   console.log(data);
// });
// process.stdout.write("hola");
// process.stdout.write("que");
// process.stdout.write("tal");

const Transform = stream.Transform;

// const Mayus = () => {
//   Transform.call(this);
// };
function Mayus() {
  Transform.call(this);
}
util.inherits(Mayus, Transform);

Mayus.prototype._transform = function (chunk, codif, cb) {
  const chunkMayus = chunk.toString().toUpperCase();
  this.push(chunkMayus);
  cb();
};

let mayus = new Mayus();

readableStream.pipe(mayus).pipe(process.stdout);

//clases ES6
// class Mayus extends Transform {
//   constructor() {
//     super();
//   }
//   _transform(chunk, encoding, cb) {
//     const chunkMayus = chunk.toString().toUpperCase();
//     this.push(chunkMayus);
//     cb();
//   }
// }

// let mayus = new Mayus();

// readableStream.pipe(mayus).pipe(process.stdout);
