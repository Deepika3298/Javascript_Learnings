//REDUCE-it takes n-1th value in accumulator and n value in item except n=1 [n=1 as item and n=0 as accumulator after that it returns its value to accumulator and add another item ] 
let arr=[1,2,3,4,5,6,7,8 ]

let sum=arr.reduce(function(accum,item){
    return accum+item
})
console.log(sum)

let fact=arr.reduce(function(accum,item){
    return accum*item
})
console.log(fact)