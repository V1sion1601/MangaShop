const res = require('express/lib/response');
const category = require('../models/category.model');

const categorycontroller = {
    //Add category
    addcategory: async  (req,res)=>{
            try{
                const newcategory = new category(req.body);
                const savecategory = await newcategory.save();
                res.status(200).json(savecategory);
            }catch(err){
                res.status(500).json(err);
            }
    },

    //getallcategory
    getallcategory: async (req,res)=>{
        try{
            // const categorylist = await category.get_all();
            // res.status(200).json(categorylist);
            category.get_all(function(data){
                res.status(200).json(data);
            });
        }catch(err){
            res.status(500).json(err);
        }
    },

    //getcategorybyID
    getcategorybyID: async (req,res)=>{
        try{
          category.getbyId(req.params.id,function(data){
            res.status(200).json(data);
           });
        //    res.status(200).send(req.params.id);
        }catch(err){
            res.status(500).json(err);
        }
    },
    create: async (req,res)=>{
        try {
            category.create(req.params.name,function(data){
                res.status(200).json(data);
            });
        } catch (error) {
            res.status(500).json(err);
        }
    },
    update: async (req,res)=>{
        try {
            category.update(req.params.id,function(data){
                res.status(200).json(data);
            });
        } catch (error) {
            res.status(500).json(data);
        }
    }
}
module.exports = categorycontroller;