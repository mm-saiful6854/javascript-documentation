//function is itself a object. It has properties and methods.
console.log("function acts as object in javascript.");
function Circle(arg){
    this.radius=arg;
    console.log("method's parameter: ", arg);
}

console.log("Let's print some of the properties of a function.")
console.log("Circle method's arguments property: ",Circle.arguments)
console.log("Function name: ", Circle.name);

// f Function() is built in constructor which is used to create javascript function.
// We can assume a function is like this:

const Circle1 = new Function('arg',`
    this.radius= arg;
    console.log("method's parameter: ", arg);
    `);
console.log("Function name: ", Circle1.name);
const obj = new Circle1(1);

//Let's explore some other methods of a function object:

const obj1 = Circle.call({},10);

const ob2 = new Circle(20);

//here obj1 and obj2 is perfectly similar. The new keyword at first creates
// en empty object {} and pass that into call method.