const res = require('express/lib/response');
const product = require('../models/product.model');

const productcontroller = {
    //Add product
    addproduct: async  (req,res)=>{
            try{
                const newproduct = new product(req.body);
                const saveproduct = await newproduct.save();
                res.status(200).json(saveproduct);
            }catch(err){
                res.status(500).json(err);
            }
    },

    //getallproduct
    getallproduct: async (req,res)=>{
        try{
            // const productlist = await product.get_all();
            // res.status(200).json(productlist);
            product.get_all(function(data){
                res.status(200).json(data);
            });
        }catch(err){
            res.status(500).json(err);
        }
    },

    //getproductbyID
    getproductbyID: async (req,res)=>{
        try{
          product.getbyId(req.params.id,function(data){
            res.status(200).json(data);
           });
        //    res.status(200).send(req.params.id);
        }catch(err){
            res.status(500).json(err);
        }
    }
}
module.exports = productcontroller;