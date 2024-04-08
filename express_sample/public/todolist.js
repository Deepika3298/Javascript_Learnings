/*$(function(){                
    console.log('Page is loaded')
})//$ selector will load after loading of whole content outside the function. All of our code(related to html page) will be write in $ selector.
console.log('Some stuff')*/


$(function(){
    let newTodoBox=$('#newtodo')
    let addTodoButton=$('#addtodo')
    let todoList=$('#todolist')

    addTodoButton.click(function(){
        let newtodo=newTodoBox.val()              //.val returns the value of input box(all this type of functions are available in jquery)
        // console.log(newtodo)

        //to store value on backened
        $.post(
        '/todos/',
        {task:newtodo},
        function(data){
            // console.log(data)
            todoList.empty();
            for(todo of data)
            {
                todoList.append("<li>"+todo.task+ "</li>")
            }
        }
        )
    })
}) //$.post(path,body,callback function),path is relative to website and body can send like javascript object,it turns into json file and json file goes into body .Callback function will run when post request is send and response will come back from server.

//$.post-do AJAX
//AJAX-Asynchronous javascript and xml. Asynchronous here means without reloading the page or making new request in url bar, our page can make get and post request from browser to server.
//In case of post request, on sending request to the server response in form ofnew web page is send but in case of $.post request, on sending request, response in formof some data will be returned to same page.


//In this list, from front-end we use $.post request to xml http request(xhr) they are ajax request