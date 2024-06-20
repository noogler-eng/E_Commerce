const express = require("express");
const cors = reqiore("cors");

const app = express();
app.use(cors());
app.use(express.json());


app.get("/products", async(req, res)=>{
    try{

        const products = await getProducts();
        if(products){
            return res.json({
                products
            })
        }else{
            return res.json({
                msg: "currently there is no product"
            })
        }
    }catch(error){
        console.log(error);
        res.status(500);
        return res.json({
            msg: "Error in Server side"
        })
    }
})

app.get("/products/:id", async(req, res)=>{
    const pid = req.params.id;
    try{

        const product = await getProduct(id);
        if(product){
            return res.json({
                products
            })
        }else{
            return res.json({
                msg: "currently there is no product with this id"
            })
        }
    }catch(error){
        console.log(error);
        res.status(500);
        return res.json({
            msg: "Error in Server side"
        })
    }
})

app.post("/addProduct", async(req, res)=>{
    const { CID, PID, PName, Price, Qty } = req.body;
    try{
        const newProd = await addProduct(CID, PID, PName, Price, Qty);
        res.status(201).send(newProd);
    }catch(error){
        console.log(error);
        res.status(500);
        return res.json({
            msg: "Error in Server side"
        })
    }
})

app.patch("/products/:id", async(req, res)=>{
    const id = req.params.id;
    const body = req.body;
    try{
        const ModifiedProduct = await updateProduct(body.qty, PID);
        res.status(200).send(ModifiedProduct);
    }catch(error){
        console.log(error);
        res.status(500);
        return res.json({
            msg: "Error in Server side"
        })
    }
})

app.delete("/products/:id", async(req, res)=>{
    const id = req.params.id;
    
    try{
        await deleteProduct(PID);
        res.status(200).json({
            msg: `Deleted Customer having CustID = ${id}`
        });
    }catch(error){
        console.log(error);
        res.status(500);
        return res.json({
            msg: "Error in Server side"
        })
    }
})


const port = 8080
app.listen(port, ()=>{
    console.log("server listening at ",port);
})