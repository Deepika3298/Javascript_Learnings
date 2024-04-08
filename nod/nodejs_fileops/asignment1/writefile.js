const fs= require('fs')

fs.writeFile(__dirname+'log.txt','\n'+'Cat'+'\n'+'Dog'+'\n'+'Monkey'+'\n'+'Cat'+'\n'+'Dog'+'\n'+'Rat',function(err){
    if(err) throw err

    console.log('log was added')
})