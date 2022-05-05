const ordercontroller = require('../controllers/order.controller');

const router = require('express').Router();

//Add order
router.post("/",ordercontroller.addorder);
//get allorder
router.get("/",ordercontroller.getallorder);
//getorderbyID
router.get("/:id",ordercontroller.getorderbyID);

module.exports = router;
