const order_detailcontroller = require('../controllers/order_detail.controller');

const router = require('express').Router();

//getorder_detailbyID
router.get("/:id",order_detailcontroller.getorder_detailbyID);
//create order_detail
router.put("/:id/:id_product/:quantity",order_detailcontroller.createorder_detail);
module.exports = router;
