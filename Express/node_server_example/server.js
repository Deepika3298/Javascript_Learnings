const express= require('express')
const server= express()// call express as a function which results in creating various servers.

server.get('/', function(req,res,next){//('/')- on which path request is send, function- http handler is a function has arguments (req(OBJECT)- request from client to the server and res(OBJECT)-respond from server to the client) need in http server request. this type of function is called middlewares.
     console.log("Yo")
     res.send("Hello World!")//to send respond
})
//they start working  on a open port and listening to any request come to port and if it is valid request it send response to client

//to give variable
// server.get('/greet/:name',function(req,res,next){
//      let greeting="Good morning,"+req.params.name //variable after greet is passed to req.params.name
//      res.send(greeting)

// })
// server.get('/greet/:tod/:name',function(req,res,next){   
//      let tod="Morning"
//      switch(req.params.tod)
//      {
//           case 'morning':tod="Morning";break;
//           case 'evening':tod="Evening";break;
//      }    
//      let greeting="Good "+tod+","+req.params.name //variable after greet is passed to req.params.name
//      res.send(greeting)

// })

//to give string as query
server.get('/greet/:tod',function(req,res,next){
     let tod="Morning"
     switch(req.params.tod){
          case 'morning':tod="Morning";break;
          case 'evening':tod="Evening";break;
     }
     let greeting="Good "+tod+","+req.query.name
     res.send(greeting)
})


//to give html
server.get('/html',function(req,res,next){
     res.send(`                                 
          <html>
               <body>
                    <h1>This is a html page</h1>
                    <i>This is looks really nice</i>
               </body>
          </html>
     `)
})//back-ticks are used to write multi-line strings
server.listen(2121)//2121 passes to frst argument and then function is executed. server.listen open the port.
//Next you have to run this file and then write path(localhost:2121) in google.
//localhost:2121/a/b (/a/b tells on which path request is sent)
