const express=require ('express');
const mongoose= require('mongoose');
const bodyParser= require('body-parser')

const app= express();

mongoose.connect("mongodb://127.0.0.1:27017/Sample",{useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{
    console.log('Connected with Mongodb')
}).catch((err)=>{
    console.log(err)
})
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
//Schema
const productSchema= new mongoose.Schema({
    name: String,
    description: String,
    price: Number
})

//model or collection
const product= new mongoose.model('Product', productSchema)


//To create product
app.post('/api/v1/product/new', async(req,res)=>{
    const prod= await product.create(req.body);

    res.status(201).json({
        success:true,
        prod
    })
})

//Read product
app.get('/api/v1/products', async(req,res)=>{
    const prod= await product.find();

    res.status(200).json({
        success:true,
        prod
    })
})

//Update product
app.put('/api/v1/product/:id', async(req,res)=>{
    let prod= await product.findById(req.params.id)

    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }

    prod= await product.findByIdAndUpdate(req.params.id,req.body,{new:true,
    useFindAndModify:false,
    runValidators:true
})
    res.status(200).json({
        success:true,
        prod
    })
})

//Delete Product 
app.delete("/api/v1/product/:id", async(req,res)=>{
    const prod= await product.findByIdAndDelete(req.params.id);

    if(!prod){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }


    res.status(200).json({
        success:true,
        message:"Product is deleted Successfully"
    })
})


app.listen(4500,()=>{
    console.log('Server is working at http://localhost:4500')
})