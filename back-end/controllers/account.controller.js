const res = require('express/lib/response');
const { NULL } = require('mysql/lib/protocol/constants/types');
const account = require('../models/account.model');

const accountcontroller = {
    //Add account
    addaccount: async  (req,res)=>{
            try{
                const newaccount = new account(req.body);
                const saveaccount = await newaccount.save();
                res.status(200).json(saveaccount);
            }catch(err){
                res.status(500).json(err);
            }
    },

    //getallaccount
    getallaccount: async (req,res)=>{
        try{
            // const accountlist = await account.get_all();
            // res.status(200).json(accountlist);
            account.get_all(function(data){
                res.status(200).json(data);
            });
        }catch(err){
            res.status(500).json(err);
        }
    },

    //getaccountbyID
    getaccountbyID: async (req,res)=>{
        try{
          account.getbyId(req.params.id,req.params.password,function(data){
              if(!Object.keys(data).length) res.status(200).json(NULL);
                else res.status(200).json(data);
           });
        //    res.status(200).send(req.params.id);
        }catch(err){
            res.status(500).json(err);
        }
    },

    // getaccountbyIDgoogle
    getaccountbyIDgoogle: async (req,res)=>{
        try{
          account.getbyIdgoogle(req.params.idgoogle,function(data){
              if(!Object.keys(data).length) res.status(200).json(NULL);
                else res.status(200).json(data);
           });
        //    res.status(200).send(req.params.id);
        }catch(err){
            res.status(500).json(err);
        }
    }

}
module.exports = accountcontroller;