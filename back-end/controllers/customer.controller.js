const res = require('express/lib/response');
const customer = require('../models/customer.model');

const customercontroller = {
    //Add customer
    addcustomer: async  (req,res)=>{
            try{
                const newcustomer = new customer(req.body);
                const savecustomer = await newcustomer.save();
                res.status(200).json(savecustomer);
            }catch(err){
                res.status(500).json(err);
            }
    },

    //getallcustomer
    getallcustomer: async (req,res)=>{
        try{
            // const customerlist = await customer.get_all();
            // res.status(200).json(customerlist);
            customer.get_all(function(data){
                res.status(200).json(data);
            });
        }catch(err){
            res.status(500).json(err);
        }
    },

    //getcustomerbyID
    getcustomerbyID: async (req,res)=>{
        try{
          customer.getbyId(req.params.id,function(data){
            res.status(200).json(data);
           });
        //    res.status(200).send(req.params.id);
        }catch(err){
            res.status(500).json(err);
        }
    }
}
module.exports = customercontroller;