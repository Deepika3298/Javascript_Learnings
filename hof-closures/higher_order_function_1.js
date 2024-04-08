// //if a function takes a function as an argument or a function returns a function is called HIGHER ORDER FUNCTION.
// //js allow us to treat function as objects and variable and we can change its reference to other object

// //variable as function
// //EXAMPLE 1
// function greeter(){
//     console.log("Hello!")
// }
// // greeter();

// let hellosayer=greeter; //variable as function
// console.log(hellosayer==greeter)

// hellosayer();

// //EXAMPLE 2
// function add(x,y){
//     return x+y;
// }
// // let sum=add(4,5) //here sum consist result of add
// // console.log(sum)
// let sum=add //here sum is function itself
// console.log(sum)

//HIGHER ORDER FUNCTION
function getFirstName(fullName){
    return fullName.split(" ")[0] //use to split string from space & take array from string
}

function greeter(findName, fullname){
    let firstName = findName(fullname);
    console.log("Hello" + " " + firstName);
}

greeter(getFirstName, "Deepika Vohra");
