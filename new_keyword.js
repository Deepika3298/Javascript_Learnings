function Fruit(color,taste){
    this.color=color;
    this.taste=taste;
}

let orange=new Fruit("orange","sour");
let apple=new Fruit("red","sweet");
let mango={
    color:"yellow", taste:"sweet"
}

console.log(orange)//it shows its fruit class object
console.log(apple)//it shows its fruit class object
console.log(mango)

console.log(orange.color)
console.log(apple.color)
console.log(mango.color)


