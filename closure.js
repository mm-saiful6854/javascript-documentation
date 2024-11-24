/* Closure is a function inside a parent function. A closure or inner function has
accessed to all its local variables as well as parent function's local variables. 
*/
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