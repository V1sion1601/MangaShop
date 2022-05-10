const accountcontroller = require("../controllers/account.controller");

const router = require("express").Router();

//Add account
router.post("/", accountcontroller.addaccount);
//get allaccount
router.get("/", accountcontroller.getallaccount);
//getaccountbyID
router.get("/:id", accountcontroller.getaccountbyID);

module.exports = router;
