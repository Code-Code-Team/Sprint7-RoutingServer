const { Router } = require('express');
const express = require('express')
const router = express.Router()

router.get("/", (req, res)=>{
   console.log(req.query)
   res.render("index", {name : req.query.name})
})

module.exports = router;
