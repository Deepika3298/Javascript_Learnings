const x=10;//this variable can be accessible by anywhere-global variable
function myfun(){
    const x=20;// can be accessible inside this function only
    console.log("line5 "+ x);
    if (true){
        const x=30;//new scope is created for variable
        console.log("line9 " + x)
    }
    console.log("line11 " + x);//here value reflect by line 5 
}
myfun();
console.log( "line14 " + x)

// scopes are made for blocks in case of const




