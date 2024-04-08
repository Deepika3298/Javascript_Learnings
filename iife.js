//IIFE-Immediately invoked function expression(immediately invoking function after it declared)
(function (){          //anynomous function
    console.log("Hello");
})();

//BENEFITS
/*//1.Helps in creating local scope without polluting global scope
(function(){
    var a=10;
    var b=a/5;
    console.log(a+b);
})();

console.log(a);*/

/*//2. Upto ecmascript 5, you can use iife to create block scope
if (true){
    (function(){
        var a=10;
    })
}

console.log(a);*/

//3.MINIFICATION 
// (function(l,p,r,s){
//     l("3*4="+p(3,4));
//     l("4*3="+p(4,3));
//     l("root(2)="+r(2));
//     l("sin(10)"+s(10));
// })(console.log, Math.pow,Math.sqrt,Math.sin);
// //original function
// function doMath(){
//     console.log("3^4 = ", Math.pow(3,4))
//     console.log("4^3 = ", Math.pow(4,3))
//     console.log("Root(2) = ", Math.sqrt(2))
//     console.log("sin(10) = ", Math.sin(10))
// }
// doMath();

//4.Classic or loop setTimeout problem  
// for(var i=0;i<10;i++){
//     setTimeout(function(){
//         console.log(i);
//     },100)
// } // gives output 10 10 times.

//solution1-with iife
  for(var i=0;i<10;i++){
    (function(j){
    setTimeout(function(){
        console.log(j);
  },100)})(i)
 }
//solution2-for ecmascript6
for(let i=0;i<10;i++){
    setTimeout(function(){
     console.log(i);
    },100)
}
//solution3-for ecmascript5 and below
for(var i=0;i<10;i++)
{
    setTimeout(console.log,100,i);
}