const res = require('express/lib/response');
const order_detail = require('../models/order_detail.model');

const order_detailcontroller = {
    //Add product
    addorder_detail: async  (req,res)=>{
            try{
                const newproduct = new product(req.body);
                const saveproduct = await newproduct.save();
                res.status(200).json(saveproduct);
            }catch(err){
                res.status(500).json(err);
            }
    },

    //getorder_detailbyID
    getorder_detailbyID: async (req,res)=>{
        try{
          order_detail.getbyId(req.params.id,function(data){
            res.status(200).json({result:data});
           });
        //    res.status(200).send(req.params.id);
        }catch(err){
            res.status(500).json(err);
        }
    }
}
module.exports = order_detailcontroller;