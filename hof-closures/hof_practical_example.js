function createCounter(initval,delta){
    let val= initval;
    function counter(){
        val=val+delta;
        return val;
    }
    return counter;
}

let fiveCount= createCounter(5,5);
let anotherCounter= createCounter(18,4);

console.log(fiveCount());//on calling five count function counter works but when we call createcounter whole function createCounter works
console.log(fiveCount());
console.log(fiveCount());

console.log(anotherCounter());
console.log(anotherCounter());
console.log(anotherCounter());

//closure scopes-as long as function is in the memory the scope of variable outside the function preserve in a inner function. Example-val with counter function.
