//async_function
// function someAsyncTask(callback){
//     setTimeout(function(){
//         callback();
//     },3000)
// }
// someAsyncTask(function(){
//     console.log("We did some task")
// })

//promises-async task
function someAsyncTask(callback){
    console.log("Begining of task")
    setTimeout(function(){
        console.log("End of task")
        callback();
    },3000)
}

let someTaskPromise=function(){
    return new Promise((resolve, reject)=> {                    //promise-constructor
       someAsyncTask(resolve)                       //promise function return object <promise> and on it we can do2 things-then and catch
    })                                              //in case of error we use reject function
}
someTaskPromise().then(function(){
    console.log("After a task is complete")
})

/*callback function of async_function is same as then function of promises
in async_function we need to give callback function at same time but in case of promises we can call then later on and do tasks*/

//resolve(value) means the job is finished successfully 
//reject(error) means if an error occur error is error object 