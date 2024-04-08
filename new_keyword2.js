console.log(this)
function fun(){
    console.log(global==this)//global is a special object in node.js .it consists all those functions which we can call from global scope or we used before(not present in browser but has object called window)
}  //here this of the function refer to global
fun();//in this case this keyword  refer to global(return true) 
//in js file ,file runs like script and this refers to script itself but in repel it acts like normal function
new fun();//in this case this keyword doesn't refer to global but something else and this process is known as autoboxing in node.js
//when we call new with fun ,it creates new empty object for fun function and this of fun scope's is limited to only this empty object thats why it returns false

function fun1(){
    this.p="something";
    return 10;
}
let o1=fun1();
let o2=new fun1();
console.log(o1)//it returns 10 
console.log(o1.p)//p is undefined
console.log(o2)//it returns new object created by new which consist return value as fun1 { p: 'something' }
console.log(o2.p) //it returns p value 



// examples of window used in browser. variables we create on console is created in window
// var x=10;
// window.x
// parseInt("10")
// window.parseInt

