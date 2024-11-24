## Object creation
Javascript is all amount of object. Object creation is possible in different ways such as object literal, factory method, and constructor.

## This keyword
The keyword 'this' refers to a object who calls that scope of call. Those scope might be a function.

## Variable types
Javascript has two types of variables such as primitives and reference variables. Primitives include string, number, boolean, undefined, null, symbol and reference types include object, function, and array. By logically, function and array are both object.

## Enumerate Properties


```
function Fighter(name, age){
    this.name = name;
    this.age = age;
    this.action = ()=> this.punch = "5kg"
    this.address = {
        longitude: 10,
        latitude: 20
    }
}
//object creation using constructor
const fighter = new Fighter("Saiful", 26);

//iterate fighter object properties and methods
for(let key in fighter){
    console.log("key: ",key, " value: ", fighter[key]);
}
// another way
const keys = Object.keys(fighter);
for(let key of keys){
    console.log("key: ",key, " value: ", fighter[key], " typeof: ", typeof fighter[key]);
}

console.log('name' in fighter);
```

## Closure
Closure is a function inside a parent function. A closure or inner function has
accessed to all its local variables as well as parent function's local variables.

```
function Parent(){
    let x=0;
    function child(){
        let y=0;
        x++;
        y++;
        console.log("x: ",x," y: ",y);
    }
    child();
    child();
    child();
}

Parent();
```
