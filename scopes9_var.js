var x=10;//this variable can be accessible by anywhere-global variable
function myfun(){
    var x=20;// can be accessible inside this function only
    x+=1;
    console.log("line5 "+ x);
    if (true){
        var x=30;//in this block line 5's x value changed or no new variable is generated or we can say that no new scope is created for variables in if block
        x+=1;
        console.log("line9 " + x)
    }
    console.log("line11 " + x);//here if block value reflect because same variable is accessible
}
myfun();
console.log( "line14 " + x)

// scopes are made for functions not for blocks in case of var