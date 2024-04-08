// function sayhello(){
//     console.log("Hello!")
// }

// setTimeout(sayhello,1000);//it print after given time delay

// setInterval(sayhello,1000);//it print after interval of given time untill we stop it.
//how we stop it is given below
//1. var intervalid=setInterval(sayhello,1000);
// clearInterval(intervalid);//it doesn't allow setinterval to work.

//2.
var intervalid;
var runCount=0;
function sayhello(){
    runCount++;
    if(runCount>5)
    {
        clearInterval(intervalid);
    }
    console.log("Hello!")
}
console.log("And th e wait starts.....")
intervalid=setInterval(sayhello,1000)