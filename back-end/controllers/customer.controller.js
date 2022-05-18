const res = require('express/lib/response');
const { updateprofile } = require('../models/customer.model');
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
    },
    //createcustomer
    createcustomer: async (req,res)=>{
        try{
            customer.create(req.params.name,req.params.ID_account,req.params.address,req.params.phone,function(data){
                res.status(200).json(data);
            });
        }catch(err){
            res.status(500).json(err);
        }
    },
    //createcustomerforgoogle
    createcustomerforgoogle: async (req,res)=>{
        try {
            customer.createforgoogle(req.params.name,req.params.ID_account,function(data){
                res.status(200).json(data);
            });
        } catch (error) {
            res.status(500).json(data);
        }
    },
    //updateprofile
    updateprofile: async (req,res)=>{
        try {
            customer.updateprofile(req.params.id,req.params.name,req.params.address,req.params.phone,req.params.ID_account,function(data){
                    res.status(200).json(data);
            });
        } catch (error) {
            res.status(500).json(err);
        }
    }
}
module.exports = customercontroller;