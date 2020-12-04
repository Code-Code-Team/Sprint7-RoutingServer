const express = require('express')
const router = express.Router()
const data = require("../modals/data")


router.get("/", (req, res)=>{
   res.render("register", {userList : data, id : ''})
})
router.get("/:id", (req, res) =>{
   
   const userId = req.params.id
   res.render("register", {userList : data, id : userId})
})
module.exports = router;
