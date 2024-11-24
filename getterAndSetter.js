function Fighter(){
    this.name = "Saiful";
    let muscle = "bisep-trisep";
    let privatePart = "---he he---"
    Object.defineProperty(this, 'muscle', {
        get: ()=> muscle,
        set: (value)=>{
            if(!value) throw new Error("invalid value");
            muscle = value;
        }
    });
}

const fighter = new Fighter();
fighter.muscle = "strong";
console.log(fighter);