const mysql=require('mysql2')

//In create connection, we add settings
const connection=mysql.createConnection({
    host:'localhost',
    database:'mytestdb',
    user:'myuser',
    password:'mypass'
})


// it is an asynchronous function- first parameter:query, 2nd parameter:callback function
connection.query(`CREATE TABLE IF NOT EXISTS persons(id INTEGER AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50) NOT NULL, age INTEGER NOT NULL, city VARCHAR(30))`, function(err,results){
    if(err){
        console.error(err)
    }
    else{
        console.log("Table created successfully");
    }
    connection.close();
})