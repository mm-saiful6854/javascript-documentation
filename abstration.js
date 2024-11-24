/* Abstraction means to hide the details and make code less complex 
from outer perspective.
So the quote:
'hide the details, show the essentials'
*/

//private properties and methods

function Fighter(){
    this.name = "Saiful";
    let muscle = "bisep-trisep"
}

const fighter = new Fighter();
console.log(fighter.name);

// here muscle is hidden. It is acting like private property.