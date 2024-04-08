function createGreeter(name){
    let firstName=name.split(" ")[0]
    function greeter(){
        console.log("Hello " + firstName);
    }
    return greeter; //returns function made inside function
}

let johngreeter = createGreeter("John Doe");
let harrygreeter = createGreeter("Harry Potter");

johngreeter();
harrygreeter();

 