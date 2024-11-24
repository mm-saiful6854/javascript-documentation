//this keyword refers to that object who calls function
const fighter = new Object();
fighter.name = "anonymous"
fighter.action = Action;

console.log("fighter name: ", fighter.name);

//here this keyword refers that object who calls it. In this example
// fighter object.
function Action(){
    this.punch="2 kg";
}

fighter.action();