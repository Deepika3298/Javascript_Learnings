const route= require('express').Router();

let students=[
    {name:'Rahul',university:'iit', year:'I'},
    {name:'Rekha',university:'jmit', year:'II'},
    {name:'Parul',university:'skit', year:'III'},
    {name:'Saket',university:'lmit', year:'IV'}   
]

route.get('/',(req,res)=>res.send(students))
// route.get('/add',(req,res)=>{
//     students.push({
//         name:req.query.name,
//         university:req.query.university,
//         year:req.query.year
//     })// On using add method alone, added section will not appear at that time. we have to see teachers then added section will appear. To show it side by side use res.send()
//     res.send(students)
// })
route.post('/',(req,res)=>{
    students.push({
        name:req.body.name,
        university:req.body.university,
        year:req.body.year
    })
    res.send(students)
})
route.get('/:id',(req,res)=>res.send(students[req.params.id]))

module.exports=route;