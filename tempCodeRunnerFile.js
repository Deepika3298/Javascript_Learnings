function Person(name,age){             // looks like Class and constructor
    this.firstName=name.split(" ")[0]
    this.lastName=name.split(" ")[1]
    this.age=age // like public variable
    this.isAdult=function(){ return age>18}
}

let p=new Person("John Smith", 30) //object of class
let h= new Person("Harry Potter",12)
console.log(p)
console.log(p.isAdult())
console.log(h.isAdult())