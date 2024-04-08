//server-side rendering using express-Content of our site is generated on the server, then sent to the browser. In this we create html file in dynamic state on the server and sent it to the browser for those computers in which javascript is  on client side.
//we call it endering because we create html file from template
//handlebars(hbs) are syntax of creating templates. Templates are files like html file but with space where we insert data. 
const express= require('express')
const server= express()
const todoRoute=require('./routes/todos')


server.set('view engine','hbs')//set is used to set certain data into your application. here we set two keys-view engine and hbs. we are telling express that our server will use hbs as view engine. View engine is a library that helps in render files.
//view engine help in creating points in template file(called templating) in which we can store data. Example-ejs,pug,hbs,jade. these are are different libraries that can do different templating. Different templates have different syntax. hbs syntax is similar to html. 
// server.set('views','views')// it tells in views folder look for views

server.set('views',__dirname+"/views")
server.use(express.json())
server.use(express.urlencoded({extended:true}))


server.use('/todos',todoRoute)


server.listen(9698)

//response 302 means server is telling the browser that you need to go to another place to get the data that means redirect. In redirect,her is parameter called location which tells the browsr where to redirect and send the request.redirect will always lead to get request post request will never redirect to post request