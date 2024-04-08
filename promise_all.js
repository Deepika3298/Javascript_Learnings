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

// Promise.all([        //array of promises as argument and result show resolve value of 3 promises
//     download('http://cb.lk/logo.png'),
//     download('http://cb.lk/banner.png'),
//     download('http://cb.lk/promo.png')
// ]).then(function(values){
//     console.log(values)
// })

// Promise.all([        //if any of promise failed to resolve, promise.all doesn't return value. further,'then' will not work
//     download('http://cb.lk/logo.png'),
//     download('ftp://cb.lk/banner.png'),
//     download('http://cb.lk/promo.png')
// ]).then(function(values){
//     console.log(values)
// }).catch(function(err){
//     console.error(err)
// })

Promise.all([        //to download, resize and upload 3 files together 
    download('http://cb.lk/logo.png'),
    download('http://cb.lk/banner.png'),
    download('http://cb.lk/promo.png')
]).then(function(downloadValues){
        return Promise.all(downloadValues.map(resize))//    return values.map(function(item){
//     return resize(item)
   }).then(function(resizeValues){
    return Promise.all(resizeValues.map(upload))
   }).then(function(uploadValues){
    console.log(uploadValues)
   })
.catch(function(err){
    console.error(err)
})