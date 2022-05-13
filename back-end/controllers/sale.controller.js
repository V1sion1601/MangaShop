const res = require('express/lib/response');
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
            res.status(200).json(data);
           });
        //    res.status(200).send(req.params.id);
        }catch(err){
            res.status(500).json(err);
        }
    }
}
module.exports = salecontroller;