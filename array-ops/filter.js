//FILTER-returns boolean(true or false) value
//create array of size same or less then previous one because it stores only those elements whose value is true acc. to function
let arr=[1,2,3,4,5,6,7]

let arr2=arr.filter(function(item){
    return(item%3===0)
})
console.log(arr2)