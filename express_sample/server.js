const express= require ('express')
const server=express()
const todoRoute= require('./routes/todo')

server.use(express.json())
server.use(express.urlencoded({extended:true}))

server.use('/public', express.static(__dirname+"/public"))//express.static makes available public folder as static website.
server.use('/todos',todoRoute)

server.listen(7011)

//to see domain click right on screen and click on header options.  