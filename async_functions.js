
//asynchronous programming-let another function running in the background while another task running in foreground because task on foreground do not use CPU(downloading file need wifi not cpu) after completion of task (on foreground) it interrupts the functioning of background function.
//Advantage-you can use mutithread on computer(multicore cpu-multithread-cpu can work parallely)-in languages which support mutithreading
//Js doesn't support mutithreading because interpreter interpret one by one but it allows those tasks to work parallely which do not need cpu and interpret don't work on it (example downloading file- because its program residein browser interpreter only give commands to do downloading ) 
// function task(done){
//     console.log("doing some task");
//     done();//done argument called as function
// }

// task (function(){
// console.log("task was done");
// })

// console.log("we did a task");

// //setTimeout
// function done(){
//     console.log("task was done");
// }

// setTimeout(done,1000) //it calls the function automatically after some delay(the given time)and this delay is asynchronous in nature(no need to call done function individually).During that delay another function runs.                            
// //takes two argument-function and number(time in m.sec)

// console.log("we did a task")


//example
function task(done){
    console.log("we are doing a task");
    setTimeout(done,1000)
}
task(function(){    
    console.log("task was done");
})  

console.log("we did a task")