const Person = {
    name: "Alice",
    age: 25,
    calculatedAge: function() {
        return this.age;
    }
}

const Fighter = {
    name: "John",
    age: 28
}
console.log(Person.calculatedAge.call(Fighter));