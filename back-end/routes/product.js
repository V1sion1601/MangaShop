const productcontroller = require("../controllers/product.controller");

const router = require("express").Router();

//Add product
router.post("/", productcontroller.addproduct);
//get allproduct
router.get("/", productcontroller.getallproduct);
//getproductbyID
router.get("/detail/:id", productcontroller.getproductbyID);
//updatecart
router.put("/update/cart/:id/:quantity", productcontroller.updatecart);
//create
router.put(
  "/create/:name/:price/:cateID/:quantity/:image",
  productcontroller.createproduct
);
//delete
router.put("/delete/:id", productcontroller.deleteproduct);
//updateproduct
router.put(
  "/updateproduct/:id/:name/:price/:quantity",
  productcontroller.updateproduct
);
module.exports = router;
