const fs=require('fs')

// fs.writeFile('myFile.txt','some data',function(err){//function(err)-callback function to show program is unsuccessful or successful 
//     if (err) throw err

//     console.log("File was written")
// })

//myfile.txt created outside this folder

//to create inside the same folder use __dirname before filename

fs.writeFile(__dirname+'/myFile.txt','some data',function(err){//function(err)-callback function to show program is unsuccessful or successful 
    if (err) throw err

    console.log("File was written")
})