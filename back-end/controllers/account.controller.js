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

    
    //getaccountbyName
    getaccountbyusername: async (req,res)=>{
        try{
          account.getbyusername(req.params.username,function(data){
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
    },
    
    //createaccount
    createaccount: async (req,res)=>{
        try{
            account.create(req.params.username,req.params.password,function(data){
                res.status(200).json(data);
            });
        }
        catch{
            res.status(500).json(err);
        }
    },
    //createaccountforgoogle
    createaccountforgoogle: async (req,res)=>{
        try{
            account.createforgoogle(req.params.username,req.params.password,req.params.ID_google,function(data){
                res.status(200).json(data);
            });
        }
        catch{
            res.status(500).json(err);
        }
    },
    //updatepassword
    updatepassword: async (req,res)=>{
        try {
            account.updatepassword(req.params.id,req.params.password,function(data){
                res.status(200).json(data);
            });
        } catch (error) {
            res.status(500).json(err);
        }
    },
    //updatesatus
    updatestatus2: async (req,res)=>{
        try {
            account.updatestatus(req.params.id,req.params.status,function(data){
                res.status(200).json(data);
            });
        } catch (error) {
            res.status(500).json(err);
        }
    }
}
module.exports = accountcontroller;