const express= require('express');
const server= express();

server.get('/a',(req,res)=>{
   res.send("AAAAA") 
})
server.get('/b',(req,res)=>{
    res.send("BBBB") 
 })
server.use((req,res)=>{
    res.send("404 not found")
}) 
server.listen(3253)

//.use function is used to use global middlewares that can handle any request
//global middlewares are those that will be running during every http request of your application
//http request is made by a client to a named host, which is located on a server.
//HTTP stands for HyperText Transfer Protocol.It is a protocol used to access the data on the World Wide Web (www).The HTTP protocol can be used to transfer the data in the form of plain text, hypertext, audio, video, and so on.
//two most common http method: a ‘GET’ request expects information back in return (usually in the form of a website), while a ‘POST’ request typically indicates that the client is submitting information to the web server.
