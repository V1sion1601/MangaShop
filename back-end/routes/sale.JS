const salecontroller = require('../controllers/sale.controller');

const router = require('express').Router();

//Add sale
router.post("/",salecontroller.addsale);
//get allsale
router.get("/",salecontroller.getallsale);
//getsalebyID
router.get("/:id",salecontroller.getsalebyID);

module.exports = router;
