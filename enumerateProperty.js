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

console.log(fighter.hasOwnProperty("latitude"))

