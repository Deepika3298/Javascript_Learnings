//IN JS, PASS BY VALUE IS USED.

//pass_by_value-new copy of variable is made inside function changingwinner
// var quidditchwinner="Harry Potter";

// function changingwinner(winner){
//     winner="Draco malfoy"
//     console.log("the winner is:"+winner)
// }

// console.log("the winner was: "+quidditchwinner)
// changingwinner(quidditchwinner);
// console.log("Now the winner is: "+quidditchwinner)

//pass_reference_as_the_value(in case of user-defined datatypes)-value changed  in same array
//pass_reference_as_value means the array or object value is stored in variable(let x) then this variable is passed
var quidditchwinners=["Harry","Ron","Hermoine"];

function changingwinners(winners){
    winners[0]="Draco";
    winners[1]="Crabbe";
    winners[2]="Pansy";
}

console.log("the winner was: "+quidditchwinners)
changingwinners(quidditchwinners);
console.log("Now the winner is: "+quidditchwinners)