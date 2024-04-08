const route = require('express').Router();

let todos = [
    { id:0,task: 'walk', status: 'done' },
    { id:1,task: 'breakfast', status: 'not-done' },
    { id:2,task: 'classes', status: 'not-done' },
    { id:3,task: 'gym', status: 'done' }
]


route.get('/', (req, res) => {
    res.send(todos)
})

route.post('/', (req, res) => {
    todos.push({
        task: req.body.task,
        status: req.body.status
    })
    res.send(todos)
})

// route.get('/:id', (req, res) => res.send[req.params.id])

// route.delete('/:id', (req, res) => res.send[])

// // route.patch('/:id', (req, res) => {
// //     task:
// // })


route.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos[id];
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.send(todo);
});
  
route.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    if (todoIndex === -1) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    todos.splice(todoIndex, 1);
    res.send(todos);
});
  
route.patch('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    if (todoIndex === -1) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    const todo = todos[todoIndex];
    if (req.body.task !== undefined) {
      todo.task = req.body.task;
    }
    if (req.body.status !== undefined) {
      todo.status = req.body.status;
    }
    res.send(todo);
});

module.exports = route;
