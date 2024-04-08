//SORT-HIGH ORDER FUNCTION

// let arr=[6,3,9,2,7,1]
// console.log(arr.sort())/

let arr=[6,3,9,2,7,1,14,26,35]
console.log(arr.sort())  //[1, 14, 2, 26, 3,35,  6, 7,  9] js by default does a lexicographical sort because js treat everything as string

//SORT IS A HIGH ORDER FUNCTION-if we are not giving any argument,it sorts like lexicographical sort

//To sort in mathematical order
//sort take argument(sort by entire number)
function compare(a,b){
    console.log(arr)
    console.log(a+" "+b)
    // return a-b;//produce ascending order sort
    return b-a;//produce descending order sort
}

let sortedArr=arr.sort(compare)// sort is high-order function.Works like insertion sort.we need to provide comparison logic
console.log(sortedArr)

//sort by unit digit
function compare(a,b){
    return (a%10)-(b%10);
}
arr.sort(compare);
console.log(arr)