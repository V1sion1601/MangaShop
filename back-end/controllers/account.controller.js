const res = require('express/lib/response');
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
                res.status(200).json({result:data});
            });
        }catch(err){
            res.status(500).json(err);
        }
    },

    //getaccountbyID
    getaccountbyID: async (req,res)=>{
        try{
          account.getbyId(req.params.id,function(data){
            res.status(200).json({result:data});
           });
        //    res.status(200).send(req.params.id);
        }catch(err){
            res.status(500).json(err);
        }
    }
}
module.exports = accountcontroller;