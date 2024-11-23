// object creation using factory method
function createPerson(){
    return {
        name: 'saiful',
        age: 26,
        sleep:function(){
            console.log("_");
        }
    }
}

let person = createPerson();
person.age=28;
let person2 = createPerson();

let person3 = new Object();
let person4 = {}
// person3 and person4 carry same meaning. They both have constructor prototype referencing 'f Object()'


// object creation using constructor
function Person(){
    this.name="saiful";
    this.age = 26;
    this.sleep = ()=>{
        console.log('_');
    }
}

let person5 = new Person();