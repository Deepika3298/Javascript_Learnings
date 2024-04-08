const fs= require('fs')

fs.readFile(__dirname+'/myfile.txt',function(err,data){//callback function-function(err,data)
    if (err) throw  err

    // console.log(data)//prints buffer- show data line by line in binary form
    console.log(data.toString())
})