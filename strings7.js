// Strings are immutable(unable to change) until we coined string to new value of string.

//wWAYS TO WRITE STRING
let strr="Asdasdsghaf"
// when we use single quotes for string it will create problem in this situation
// let str1='this is arnav's string' //because according to compiler string ends after v so we use escaping character befor single quote after v and result will be
let str1='this is arnav\'s string'
console.log(str1)
//backticks``
let p='arnav'
let str2=`this is ${p}\'s string`    //backticks-in this case we use templates
               //escape variables inside template string
console.log(str2)
//line breaks used to write long string(use line escape (\n)with)
let longstr='this is \n \
a very long \
string' 
console.log(longstr)              


let str="asfdsfsrdxzs"
// length
console.log(str.length)
console.log(str.indexOf("a")) //index of a
//0
console.log(str.indexOf("d")) //index of d
// 3
console.log(str.indexOf("s",3)) //difference of index from 1st s to 3rd s 
// 4
console.log(str.substr(3)) //str after 3rd index
// 'dsfsrdxzs'
console.log(str.substr(3,5)) //strng after 3rd index from 1st to 5th
// 'dsfsr'
console.log(str.substring(3,5))//strng after 3rd to 5th  
// 'ds'
console.log(str.substring(3))//str after 3rd index
// 'dsfsrdxzs'
console.log(str.slice(4,5))//it slice the string 
// 's'
console.log(str.slice(-5,-3))// slice string from backward position
// 'rd'
console.log(str.substring(-5,-3))//gives empty string          #substring and slice works same for positive value but difffer for negative value
// ''
console.log(str.split('a')) //it returns array
// (2)['', 'sfdsfsrdxzs']0: ""1: "sfdsfsrdxzs"length: 2[[Prototype]]: Array(0)

let url="http://youtube.com/watch?v=j1h35vj13h5vk1h"
console.log(url.split('?'))
// (2)['http://youtube.com/watch', 'v=j1h35vj13h5vk1h']0: "http://youtube.com/watch"1: "v=j1h35vj13h5vk1h"length: 2[[Prototype]]: Array(0)
console.log(url.split('='))
// (2)['http://youtube.com/watch?v', 'j1h35vj13h5vk1h']
console.log(url.split('=')[1])
// 'j1h35vj13h5vk1h'

//SEARCHING
let s='this has some data here'
let key='has'
console.log(s.indexOf(key))
let key1='have'
console.log(s.indexOf(key1))

let s1='this is a easy job'
console.log(s1.indexOf('is'))//indexof return first postion
console.log(s1.indexOf('is',3))//use optional secondary argument(here 3 is used as)

let s2='ab aab abbcd ba aab'
console.log(s2.indexOf('ab'))
console.log(s2.indexOf('ab',1))
console.log(s2.lastIndexOf('ab'))
console.log(s2.lastIndexOf('ab',16))

 

