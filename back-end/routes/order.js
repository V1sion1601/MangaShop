const ordercontroller = require('../controllers/order.controller');

const router = require('express').Router();

//Add order
router.post("/",ordercontroller.addorder);
//get allorder
router.get("/",ordercontroller.getallorder);
//getorderbyID
router.get("/:id",ordercontroller.getorderbyID);
//create
router.put("/:id/:price/:quantity",ordercontroller.createorder);
//updateorder
router.post("/:id/:status",ordercontroller.updateorder);
module.exports = router;
