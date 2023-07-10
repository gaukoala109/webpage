let x;
let y;
let z;
let s = "Hello Quoc";

s = s.trim();
s = s.toUpperCase();

console.log(s);

console.log(s.lastIndexOf("L"));

s = s.replaceAll("L", "I");
console.log(s);
console.log(s.lastIndexOf("L"));