const route=require('express').Router()
//This route is on the "/api/" path

const db= require('../db')

route.get('/persons/',(req,res)=>{
    //Send all persons as an array here
    
    db.getAllPersons()
    .then((persons)=>res.send(persons))
    .catch((err)=>res.send({error:err}))
    
})

route.post('/persons',(req,res)=>{
    //Add the new person(details are in body)
    db.addNewPerson(req.body.name, req.body.age, req.body.city)
    .then(()=>res.redirect('/api/persons/'))//Redirected to get all persons
    .catch((err)=>res.send({error:err}))
})

exports=module.exports={
    route
}