// let buffer = Buffer.alloc(4);
// let buffer = Buffer.from([1, 2, 5]);
let buffer = Buffer.from("Hola");
// console.log("🚀 ~ buffer:", buffer);

// --

let abc = Buffer.alloc(26);
console.log("🚀 ~ abc:", abc);

for (let i = 0; i < 26; i++) {
  abc[i] = i + 97;
}

console.log("🚀 ~ abc:", abc.toString());
