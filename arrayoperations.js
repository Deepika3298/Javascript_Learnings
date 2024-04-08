let arr=[1,2,3]
// arr //to access array
// [1, 2, 3] ans
let arr2=[1,2,3,'asd','fsng',true,false,{a:10},[3,4,5]]; //heterogenous array
// arr2  //to access array
// [1, 2, 3, 'asd', 'fsng', true, false, {…}, Array(3)] ans
console.log(arr)
console.log(arr2)
console.log(arr2[7])
//2d array
let twodarr=[[1,1],[2,2],[3,3]]
console.log(twodarr)
console.log(twodarr[2][1])
console.log(arr.join('-'))//this operator create string and join array and insert - character between array elements
let ar1=[1,2,3,4,5,6,7,8,9]
console.log(ar1.slice(4,5))//return selected elements in an array from first position to last position and not change the original array
console.log(ar1.splice(4,5))//we can say that it add or remove element from first position to length from the array and change the original array
console.log(ar1)

let aar=[1,2,3,4,5]
console.log(aar[5])
console.log(aar[4])
console.log(aar[3])
console.log(aar[2])
aar[5]=10
console.log(aar[5])
aar[15]=6
console.log(aar)
console.log(aar.length)//aar has 16 elements from 0-5 & 15 has elements but 6-14 are empty slots.
aar[10]=234
console.log(aar)//javascript arrays can have empty slots and empty slots returns value undefined.
//loop
let arr3=[1,'hello',false,[2,3]]
for(let i=0;i<arr3.length;i++)
{
    console.log(arr3[i])
}
//for-of loop
for(let val of arr3){       
    console.log(val)
}
//for...in loop
//Arrays
for(let index in arr3){   
    console.log(index)
}
for(let index in arr3){    
    console.log(arr3[index])
}
//objects
let animal={
    name:'Zebra',
    leg :4
}
console.log(animal.name)//normally used to write key
console.log(animal["name"])

for(let key in animal){  //to write names of key  
    console.log(key)
}

for(let key in animal){    
    console.log(key,animal[key])//#to write value with name  # .notation takes key name []notation takes string value so thats why we use []notation here
}
//while and do while loops

//add and remove elements from array
let fruits=["apple","mango"]
//push and pop works like stack here (add at end)
fruits.push("melon")
console.log(fruits)
fruits.pop()
console.log(fruits)

//shift and unshift like queue (add at begining)
fruits.shift();
console.log(fruits)
fruits.unshift("kiwi");
console.log(fruits)
fruits.unshift("grapes");
console.log(fruits)

//Data changing
let notes=['do','re','mi','fa','so','la','ti','do']
console.log(notes)
//slice:non-destructive in nature
console.log(notes.slice(4,6))//first position and end postion(optional)
console.log(notes)
//splice:destructive in nature
let omit=notes.splice(4,2)//start position and length or no. of items to be spliced
console.log(omit)
console.log(notes)
//replace items with splice
notes.splice(0,3,'sa','re','ga')
console.log(notes)

//Concat:non-destructive in nature
let notes1=['do','re','mi']
console.log(notes1.concat('sa','re','ga'))
console.log(notes1)
//concat array to array
console.log(notes1.concat(['sa','re','ga']))