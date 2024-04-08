//variable don't have any type (in c we have variable type int for integers, char for character,etc but not in js)
//js is not a typesafe language.
let num=1;
let str='this is string';
let bool=true;

console.log(num);
console.log(typeof num);//result is number
num="hello"; 
console.log(num);
console.log(typeof num);//result is string

//different primitive datatypes-numbers,string,bool
console.log(typeof 10) //result-number
console.log(typeof "deepika") // result string. typeof-tells about datatype
console.log(typeof true)//result-boolean
console.log(typeof -10.65)//result-number

// When we write line by line and execute it ,is known as REPL(read,execute,print ,loop). undefined-when command doesn't return any value to console then we get undefined as return example in notebook
// work in console using console.log() done line by line. undefined is not seen in IDE because there whole script is executed and returns value.
// direct string like 'hello' and mathematical operations like 3+5 return values in repl because it is valid in javascript.
// * type of return in form of string (check in console-typeof 10 return "number")and if we check typeof 10=="number" it gives true
// but typeof 10==number is false
// typeof of null is "object" and undefined is "undefined" and array is "object"
// we use Number.MAX_SAFE_INTEGER AND Number.MIN_SAFE_INTEGER instead of Number.MAX_VALUE.
// string length??

  