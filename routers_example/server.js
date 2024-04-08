//ROUTING-Routing refers to how an application’s endpoints (URIs) respond to client requests. 
const express=require('express')
const server= express();

const teacherroute= require ('./routes/teachers')
const studentroute= require ('./routes/students')

//Server doesn't support decoding the body because it doesn't know the format of request's body-json,urlencoded,raw,binary.
//To decode body we use some middlewares present inside express(json-used if body id json encoded,urlencoded for urlencoded body)
server.use(express.json())
server.use(express.urlencoded({extended:true}))

server.use('/students',studentroute)
server.use('/teachers',teacherroute)

server.listen(2233)

//post request:content we send through url goes in body of request
//browser can't send post request by typing in url.