// let a=false;
// while(!a){
//     console.log(1)
// }//continuous loop not reach line 6

// setTimeout(function(){
//     a=true;
// },1000)

let a=false;

setTimeout(function(){
    a=true;
},1000)

while(!a){
    console.log(1)
}//it never ends so settimeout function get never executed 

