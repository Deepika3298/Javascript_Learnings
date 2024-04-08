//Function inside object
let obj={
    aNumber:123,
    aString:"asdas",
    aFunction:function(){
        return (this.aNumber + this.aString)//this refers to object itself
    }
}
console.log(obj.aFunction())