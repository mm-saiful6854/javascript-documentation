/* Closure is a function inside a parent function. A closure or inner function has
accessed to all its local variables as well as parent function's local variables. 
*/
function Parent(){
    let x=0;
    let func = function child(){
        let y=0;
        x++;
        y++;
        console.log("x: ",x," y: ",y);
    }
    func();
    console.log("x: ",x);
    func();
    func();
    return func;
}

let f = Parent();
console.log("out side")
f();