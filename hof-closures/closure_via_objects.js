function createCounter(initval,delta){
    let val=initval;

    let counter={
        incr:function(){
            // val++;
            val+=delta;
        },
        decr:function(){
            // val--;
            val-=delta;
        },
        show:function(){
            console.log(val);
        }
    }
    return counter;
}

let a=createCounter(50,5)
a.show();
a.incr();
a.incr();
a.show();
console.log (typeof a)          //object
console.log (typeof a.show)     //function
console.log (typeof a.show())   //undefined