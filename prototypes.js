//prototype is a way through which we can do inheritance
let p={
    a:10
}
let q=Object.create(p)
q.b=20;
let r=Object.create(q)
r.c=20;

// console.log(p)
// console.log(q)
// console.log(r)
console.log(p.a)//shows inheritance
console.log(q.a)
console.log(r.a)
console.log(r.__proto__===q)
console.log(q.__proto__===p)



//Proto is a object create inside object which shows inheritance
// let p={a:10}
// undefined
// let q=Object.create(p);
// undefined
// q.b=20;
// 20
// let r=Object.create(q); r.c=30;
// 30
// r
// {c: 30}c: 30[[Prototype]]: Objectb: 20[[Prototype]]: Objecta: 10[[Prototype]]: Object
// q.a
// 10
// q.a++ //q.a=q.a+1 it will change only in q not in p this is called copy on write(cow) means it will copy values only when we write instead it refer parent object 
// 10
// q.a
// 11
// p.a
// 10
// r.a
// 11
// p
// {a: 10}
// q
// {b: 20, a: 11}
// r
// {c: 30}c: 30[[Prototype]]: Objecta: 11b: 20[[Prototype]]: Object