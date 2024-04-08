//middlewares are those functions that will have the access for requesting  an object,responding to an object, and moving to the next middleware function in the application request-response cycle.
//middleware is a function that has req,res and next object.
//used to access the http  request and response objects. 
//in server there are various middlewares(like stack), when we request it goes to first middleware and id we do res.send our response will send but if we call next our request will go to next middleware.

const express= require ('express')
const server= express();

const m1=function(req,res,next){
    console.log("we are in middleware1")
    next();//next is treated as function here
}
const m2=function(req,res,next){
    console.log("we are in middleware2")
    next();
}
const m3=function(req,res,next){
    console.log("we are in middleware3")
    next();
}

server.use(m1);
//server.use(m2);//both will run when we send request to the server.
server.use('/a',m2);//when we write it with localhost:3232/a, m1&m2 is printed but if we write localhost:3232/b m1 &m3 is printed.
server.get('/a',function(req,res,next){
    res.send("Hello world")
})

server.use(m3);

server.listen(3232)
// when we open port with localhost:3232 it prints only m1,m2.but when we write localhost:3232/abcd it display m1,m2,m3.


//middlewares are worked in case of app.use and app.get. app.get is used to handle http 'get' request and app.use is used to handle all other requests.
