//non strict equality operator(==)
//it tries to typecast either left to right or right to left and then check its equality
1=="1" //true   lhs-number & rhs-string

//strict equality operator
//it check left and right side value and type should be same (not typecast)
1==="1" //false

console.log((1+"1")==11)//true(concatenation)      +operator used for both numeric addition and concatenation
console.log(("11"-1)==1)//false(numeric calculation)   -operator only for numeric operation
console.log(("11"-1)==10)//true (numeric calculation)
console.log([]=="")//true
console.log([]==0)//true
console.log(0=="")//true
// "" can be typecast to 0,[] can also be typecast to ""

//unary + operator tries to typecast into number
"1"
'1'//string
+"1" 
1 //number
+[]
0//[] can be converted to 0

let o={}//object
o.toString()//tostring is used to convert object into string
//'[object Object]'//means object has type Object
console.log(""+{})
//'[object Object]'//object converted to string
// {} on left hand side act as function and {} on rhs act as object acc to javascript interpreter.
 
