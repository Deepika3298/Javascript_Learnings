const route=require('express').Router()

let todos=[
    {task:"This is first task"},
    {task:"this is second task"}
]

route.get('/',(req,res)=>{
    res.render('todos',{todos})//Takes two objects-one(name of handlebar file) and 2nd is object(here i send todos array as object to my response)
})

route.post('/',(req,res)=>{
    todos.push({
        task:req.body.newtodo
    })
    res.redirect('todos')
})

module.exports=route