const accountcontroller = require("../controllers/account.controller");

const router = require("express").Router();

//Add account
router.post("/", accountcontroller.addaccount);
//get allaccount
router.get("/", accountcontroller.getallaccount);
//getaccountbyID
router.get("/:id/:password", accountcontroller.getaccountbyID);
//getaccountbygoogle
router.get("/:idgoogle", accountcontroller.getaccountbyIDgoogle);
//createaccount
router.post("/:username/:password", accountcontroller.createaccount);
//getaccountbyusername
router.post("/:username", accountcontroller.getaccountbyusername);
//createaccountforgoogle
router.post("/:username/:password/:ID_google", accountcontroller.createaccountforgoogle);
//updatepassword
router.put("/updatepassword/:id/:password",accountcontroller.updatepassword);
//updatestatus
router.put("/updatestatus/:id/:status",accountcontroller.updatestatus2);
module.exports = router;
