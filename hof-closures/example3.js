function f1(){
    function f2(){
        return 5;//this is executed because of 9 line
    }
    return f2;
}

let x=f1();
let p= x();
p();