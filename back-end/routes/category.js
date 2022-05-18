const categorycontroller = require('../controllers/category.controller');
const router = require('express').Router();

//Add category
router.post("/",categorycontroller.addcategory);
//get allcategory
router.get("/",categorycontroller.getallcategory);
//getcategorybyID
router.get("/:id",categorycontroller.getcategorybyID);
//createcategory
router.put("/add/:name",categorycontroller.create);
//update
router.get("/update/:id",categorycontroller.update);
module.exports = router;
