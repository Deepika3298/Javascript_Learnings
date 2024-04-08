let x=10;//this variable can be accessible by anywhere-global variable
function myfun(){
    let x=20;// can be accessible inside this function only
    x+=1;
    console.log("line5 "+ x);
    if (true){
        let x=30;//new scope is created for variable
        x+=1;
        console.log("line9 " + x)
    }
    console.log("line11 " + x);//here value reflect by line 5 
}
myfun();
console.log( "line14 " + x)

// scopes are made for blocks in case of let