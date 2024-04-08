const mysql=require('mysql2')

const connection=mysql.createConnection({
    host:'localhost',
    database:'mytestdb',
    user:'myuser',
    password:'mypass'
})
connection.query(`SELECT * FROM persons`,
function(err,rows,cols){
    if (err)
    console.error(err)
    else
    console.log(rows)
    console.log(cols)//cols or fields- it is an array, where we can see objects. It contains characteristics of column-name, column belongs to which table,etc
    connection.close();
})