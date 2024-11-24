/*
Javascript has two types of variables such as primitives and reference variables.
primitives include string, number, boolean, undefined, null, symbol
references include object, function, and array.
By logically, function and array are both object.
*/
let x =10;
let y = x;
x=20
console.log("x: ",x,"\ny: ",y);

let o1 = {value:20};
let o2 = o1;
o1.value = 50;
console.log("o1: ", o1,"\no2: ",o2);



/*
Primitives are copied by their value.
Objects are copied by their reference.
*/