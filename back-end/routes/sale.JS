const salecontroller = require('../controllers/sale.controller');

const router = require('express').Router();

//Add sale
router.post("/",salecontroller.addsale);
//get allsale
router.get("/",salecontroller.getallsale);
//getsalebyID
router.get("/:id",salecontroller.getsalebyID);
//create
router.put("/:name/:percent/:require/:date_start/:date_finish",salecontroller.create);
//update
router.get("/update/:id/:name/:percent/:require/:date_start/:date_finish",salecontroller.update);
module.exports = router;
