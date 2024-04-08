function download(url){
    return new Promise((resolve, reject) => {
        if(!url.startsWith("http")){
            reject(new Error("Url doesn't start with http"))
        }
        else{
            console.log("Start download: "+ url)
            setTimeout(function(){ //fake 3 second download task
                let fileName=url.split("/").pop()
                resolve(fileName)
            },3000)
        }
    })
}
function resize(fileName){
    return new Promise((resolve, reject) => {
        if(!fileName.endsWith(".png")){
            reject(new Error("File is not png"))
        }
        else{
            console.log("Start resize: "+fileName)
            setTimeout(function(){//fake 3-sec resize take
                //change x.png to x-resized.png
                let resizedFile=fileName.split(".")[0]+"-resized.png"
                resolve(resizedFile)
            },3000)
        }
    })
}

function upload(resizedFileName){
    return new Promise(function(resolve, reject) {
        console.log("start upload: "+resizedFileName);
        setTimeout(function(){        //fake 3-sec upload task
            let uploadurl="http://imgur.com/"+resizedFileName
            resolve(uploadurl);
        },3000)
    })
}

// download('http://cb.lk/logo.png').then(function(fileName){
//     resize(fileName).then(function(resizedFile){
//         console.log("Resized file is at: "+resizedFile)
//     })
// })

// //instead we can do
// download('http://cb.lk/logo.png').then(resize).then(function(resizedFile){
//         console.log("Resized file is at: "+resizedFile)
//      })

// download('ftp://cb.lk/logo.png').then(resize).then(function(resizedFile){   //http error
//     console.log("Resized file is at: "+resizedFile)
// })
// .catch(function(err){          //to handle error
//     console.error(err)
// })

download('http://cb.lk/logo.png').
then(resize).
then(upload).
then(function(uploadedurl){
    console.log("File was uploaded to: "+ uploadedurl)
})
.catch(function(err){          //to handle any reject in promise chain
    console.error(err)
})