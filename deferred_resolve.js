function downloadpromise(){
    return new Promise((resolve, reject) => {
        console.log("Start to download the file")
        setTimeout(function(){
            console.log("Download is complete")
            resolve();
        },3000)
    })
}

// downloadpromise().then(function(){         //instant then calling
//     console.log("After download")
// })

//then call sometime later
let downloadedFile=downloadpromise()//js resolve this promise here
//we can call then later
setTimeout(function(){
    downloadedFile.then(function(){
        console.log("After download")
    })
},5000)