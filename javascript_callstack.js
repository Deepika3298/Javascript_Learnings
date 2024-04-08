//callstack- A call stack is a mechanism for an interpreter to keep track of its place in a script that calss multiple function-what function is currently 
//being run and what functions are called from within that function,etc

function ceo(){
    console.log("let's make a dent in the universe")
    cto();
}
function cto(){
    console.log("let's make a gamechanging product")
    vpengg();
}
function vpengg(){
    console.log("let's make a new javascript frame work")
    techlead();
}
function techlead(){
    console.log("let's port angular to typescript")
    developer();
}
function developer(){
    console.log("let's copy some code from Stackoverflow")
    throw new error("The code didn't work")
}

ceo();