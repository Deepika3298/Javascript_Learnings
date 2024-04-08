 function incr(x)  //functn defination
 {
    return x+1; 
 }

 console.log(incr(4))  //function call  gives ans 5
 console.log(incr("hello"))  //gives result hello1 because number typecast in string and produce result using concatenation

 //concatenation
 console.log('a' + 'b') //result ab(+ operator overloading to concatenation in case of string)
 console.log(incr(true)) //gives value 2 because true typecast here into 1 and 1+1=2

 let five=incr(4);
 console.log(five) //print 5