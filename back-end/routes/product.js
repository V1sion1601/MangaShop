const productcontroller = require('../controllers/product.controller');

const router = require('express').Router();

//Add product
router.post("/",productcontroller.addproduct);
//get allproduct
router.get("/",productcontroller.getallproduct);
//getproductbyID
router.get("/detail/:id",productcontroller.getproductbyID);

module.exports = router;
