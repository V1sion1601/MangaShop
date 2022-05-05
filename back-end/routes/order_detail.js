const order_detailcontroller = require('../controllers/order_detail.controller');

const router = require('express').Router();

//getorder_detailbyID
router.get("/:id",order_detailcontroller.getorder_detailbyID);

module.exports = router;
