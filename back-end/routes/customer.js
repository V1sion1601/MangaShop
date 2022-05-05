const customercontroller = require('../controllers/customer.controller');

const router = require('express').Router();

//Add customer
router.post("/",customercontroller.addcustomer);
//get allcustomer
router.get("/",customercontroller.getallcustomer);
//getcustomerbyID
router.get("/:id",customercontroller.getcustomerbyID);

module.exports = router;
