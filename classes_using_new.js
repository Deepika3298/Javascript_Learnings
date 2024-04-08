//class concept
// function Person(name,age){             // looks like Class and constructor
//     this.firstName=name.split(" ")[0]
//     this.lastName=name.split(" ")[1]
//     this.age=age // like public variable
//     this.isAdult=function(){ return age>18}
// }

// let p=new Person("John Smith", 30) //object of class
// let h= new Person("Harry Potter",12)
// console.log(p)
// console.log(p.isAdult())
// console.log(h.isAdult())

//PUBLIC-PRIVATE CONCEPT
function Person(name,age){
    this.firstName=name.split(" ")[0]// like public variable
    this.lastName=name.split(" ")[1]// like public variable
    // let mAge=age  //VARIABLE -it is not available in object but available for function isAdult(we can remove this variable too because it will be available through argument to function directly)
    this.isAdult=function(){ return age>18} //age is like a private variable here.
}

let p=new Person("John Smith", 30)
let h= new Person("Harry Potter",12)
console.log(p)
console.log(p.isAdult())
console.log(h.isAdult())