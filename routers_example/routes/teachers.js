/*const express=require('express')
const router=express.Router //router- a object exist in express
const route=router();*/

const route= require('express').Router();  //route is a middleware here on calling router

let teachers=[
    {name:"deepika",subject:"web dev"},
    {name:"deepak",subject:"competitive coding"}
]

route.get('/',(req,res)=>res.send(teachers))// on top of route middleware, we are creating more middlewares. This type of middlewares are called routers.This  helps us to extend our express easily
//Help to add data in the server on client side. Data is volatile(in ram), so when we reload the server it disappears.
route.get('/add',(req,res)=>{
    teachers.push({
        name:req.query.name,
        sybject:req.query.subject
    })// On using add route alone, added section will not appear at that time. we have to see teachers then added section will appear. To show it side by side use res.send()
    res.send(teachers)
})

route.get('/:id',(req,res)=>res.send(teachers[req.params.id]))

/*if you want to add add route after id then write like this
route.get('/:id',(req,res)=>
{
    if(isNaN(req.params.id)){
    next();
    }

    res.send(teachers[req.params.id])
})

route.get('/add',(req,res)=>{
    teachers.push({
        name:req.query.name,
        sybject:req.query.subject
    })
    res.send(teachers)
})*/

module.exports=route;

//route-mini express server that is included in another express server.
//servers can listen on their ports on its own but routes cannot.Routes have to be added to the express server for them to work.
//route.use and route.listen doesn't work but server.listen and server.use works.