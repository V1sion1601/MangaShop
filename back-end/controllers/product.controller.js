const res = require("express/lib/response");
const product = require("../models/product.model");

const productcontroller = {
  //Add product
  addproduct: async (req, res) => {
    try {
      const newproduct = new product(req.body);
      const saveproduct = await newproduct.save();
      res.status(200).json(saveproduct);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //getallproduct
  getallproduct: async (req, res) => {
    try {
      // const productlist = await product.get_all();
      // res.status(200).json(productlist);
      product.get_all(function (data) {
        res.status(200).json(data);
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //getproductbyID
  getproductbyID: async (req, res) => {
    try {
      product.getbyId(req.params.id, function (data) {
        res.status(200).json(data);
      });
      //    res.status(200).send(req.params.id);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //updatecart
  updatecart: async (req, res) => {
    try {
      product.updatecart(req.params.id, req.params.quantity, function (data) {
        res.status(200).json(data);
      });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //createproduct
  createproduct: async (req, res) => {
    try {
      product.create(
        req.params.name,
        req.params.price,
        req.params.quantity,
        req.params.image,
        req.params.cateID,
        function (data) {
          res.status(200).json(data);
        }
      );
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //delete
  deleteproduct: async (req, res) => {
    try {
      product.delete(req.params.id, function (data) {
        res.status(200).json(data);
      });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  updateproduct: async (req, res) => {
    try {
      product.updateproduct(
        req.params.id,
        req.params.name,
        req.params.price,
        req.params.quantity,
        function (data) {
          res.status(200).json(data);
        }
      );
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = productcontroller;
