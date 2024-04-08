//MAP-HIGH ORDER FUNCTION
//creates array of same size as previous one.each item from array1 pass from function(defined in map) produce result in another array

// let arr=[12,56,135,73,13,468]
// let arr2=arr.map(function(item){
//     return 100-item
// })
// console.log(arr2)

let arr=[1,2,3,4,5,6,7,8]

let arr2=arr.map(function(item){
    return item*item
})
console.log(arr2)
let arr3=arr.map(Math.sqrt)
console.log(arr3)

//Math.sqrt is a function and returns squareroot