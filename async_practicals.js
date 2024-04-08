
// function downloadFile( url, downloaded){//downloade-callback function
// //we are downloading the file here
// //let's assume it takes 3 sec to download
// //we use setTimeout to generate fake delay
// console.log("Downloading file: "+ url)
// setTimeout(function (){
//     let filePath="C:\\Windows\\xyz.txt"
//     console.log("File was downloaded to: "+ filePath)
//     downloaded(filePath)
// },3000)
// }



// // downloadFile("http://google,com/logo.png",function(path){
// //     console.log("We got the file at"+path)
// // })



// function resizeFile(filePath, resized){
//     //we are resizing the file. it takes 2 seconds
//     //we again use setTimeout for fake delay
//     console.log("We are resizing: "+ filePath)
//     setTimeout(function(){
//         let newPath=filePath.split(".")[0]+"-resized."+ filePath.split(".")[1]
//         resized(newPath)
//     },2000)

// }

// resizeFile("C:\\Users\\Arnav\\photo.jpg",function(path){
//     console.log("resized file is: "+ path)
// })






//2 OR MORE ASYNC_FUNCTION TOGETHER
function downloadFile( url, downloaded){//downloade-callback function
    //we are downloading the file here
    //let's assume it takes 3 sec to download
    //we use setTimeout to generate fake delay
    console.log("Downloading file: "+ url)
    setTimeout(function (){
        let filePath="C:\\Downloads\\"+url.split("/").pop()
        console.log("File was downloaded to: "+ filePath)
        downloaded(filePath)
    },3000)
    }
    
    function resizeFile(filePath, resized){
        //we are resizing the file. it takes 3 seconds
        //we again use setTimeout for fake delay
        console.log("We are resizing: "+ filePath)
        setTimeout(function(){
            let newPath=filePath.split(".")[0]+"-resized."+ filePath.split(".")[1]
            resized(newPath)
        },3000)
    
    }

    function uploadFile(diskpath, uploaded){
        //we will upload this file, it takes 3 seconds
        //we will use another fake setTimeout delay
        setTimeout(function(){
            let uploadedPath="http//cb.lk/uploads/"+ diskpath.split('\\').pop();
            console.log("we uploaded to: "+uploadedPath)
            uploaded(uploadedPath)
        },3000)
    }
    
    
    // downloadFile("http://google.com/logo.png",function(downloadedPath){ //DOWNLOAD +RESIZE
    //     resizeFile(downloadedPath,function(path){
    //         console.log("resized file is: "+ path)
    //     })
    // })
    
    downloadFile("http://google.com/logo.png",function(downloadedPath){ //DOWNLOAD +RESIZE +upload 
        resizeFile(downloadedPath,function(resizedpath){
            uploadFile(resizedpath,function(uploadedUrl){
                console.log("Uploaded successfully to: "+uploadedUrl)
            })
        })
    })
    
    