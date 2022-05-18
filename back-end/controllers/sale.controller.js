const res = require('express/lib/response');
const { NULL } = require('mysql/lib/protocol/constants/types');
const sale = require('../models/sale.model');

const salecontroller = {
    //Add sale
    addsale: async  (req,res)=>{
            try{
                const newsale = new sale(req.body);
                const savesale = await newsale.save();
                res.status(200).json(savesale);
            }catch(err){
                res.status(500).json(err);
            }
    },

    //getallsale
    getallsale: async (req,res)=>{
        try{
            // const salelist = await sale.get_all();
            // res.status(200).json(salelist);
            sale.get_all(function(data){
                res.status(200).json(data);
            });
        }catch(err){
            res.status(500).json(err);
        }
    },

    //getsalebyID
    getsalebyID: async (req,res)=>{
        try{
          sale.getbyId(req.params.id,function(data){
            if(!Object.keys(data).length) res.status(200).json(NULL);
            else res.status(200).json(data);
           });
        //    res.status(200).send(req.params.id);
        }catch(err){
            res.status(500).json(err);
        }
    },
    //createsale
    create: async (req,res)=>{
        try {
            sale.create(req.params.name,req.params.percent,req.params.require,req.params.date_start,req.params.date_finish,function(data){
                res.status(200).json(data);
            });
        } catch (error) {
            res.status(500).json(err);
        }
    },
    update: async (req,res)=>{
        try {
            sale.update(req.params.id,req.params.name,req.params.percent,req.params.require,req.params.date_start,req.params.date_finish,function(data){
                res.status(200).json(data);
            });
        } catch (error) {
            res.status(500).json(err);
        }
    }
}
module.exports = salecontroller;