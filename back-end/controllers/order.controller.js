const res = require('express/lib/response');
const order = require('../models/order.model');

const ordercontroller = {
    //Add product
    addorder: async  (req,res)=>{
            try{
                const newproduct = new product(req.body);
                const saveproduct = await newproduct.save();
                res.status(200).json(saveproduct);
            }catch(err){
                res.status(500).json(err);
            }
    },

    //getallorder
    getallorder: async (req,res)=>{
        try{
            // const productlist = await product.get_all();
            // res.status(200).json(productlist);
            order.get_all(function(data){
                res.status(200).json({result:data});
            });
        }catch(err){
            res.status(500).json(err);
        }
    },

    //getorderbyID
    getorderbyID: async (req,res)=>{
        try{
          order.getbyId(req.params.id,function(data){
            res.status(200).json({result:data});
           });
        //    res.status(200).send(req.params.id);
        }catch(err){
            res.status(500).json(err);
        }
    }
}
module.exports = ordercontroller;