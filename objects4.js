// objects (first class variables and can be made without class and can't be inherited and typecast )
let obj={
    a:10,      //properties            
    b:"hello",
    c:true,
    d:{
        p:10,
        q:20,
        r:{
            s:"value"
        }
    }
}
console.log(obj.a)// to access property
//  in other languages a,b,c are known as fields of object (objects which are made using class) but in js it is knowns as properties and each property has value
// properties are public by default. we use functions to make it private.
// properties can be of primitive type as a,b,c and can be another object as d
// to access s value we can write command obj.d.r.s

console.log(obj.d.r.s)
console.log(obj.l=1111);// new property added.
console.log(obj);
// we dont use let in adding properties in objects.
// in object oriented programming, we can't add data member in object without adding in class but in javascript we can add new properties in object.
console.log(delete obj.b)//properties can be deleted 
console.log(obj);