const customercontroller = require('../controllers/customer.controller');

const router = require('express').Router();

//Add customer
router.post("/",customercontroller.addcustomer);
//get allcustomer
router.get("/",customercontroller.getallcustomer);
//getcustomerbyID
router.get("/:id",customercontroller.getcustomerbyID);
//createcustomer
router.post("/:name/:ID_account/:address/:phone",customercontroller.createcustomer);
//createforgoogle
router.post("/:name/:ID_account",customercontroller.createcustomerforgoogle);
//updateprofile
router.post("/update/:id/:name/:address/:phone/:ID_account",customercontroller.updateprofile);
module.exports = router;
