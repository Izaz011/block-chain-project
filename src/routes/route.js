const express = require('express');
const router = express.Router()

const coinController=require("../controllers/coinController")


router.get("/getCoin",coinController.storeCoin)





module.exports = router; 