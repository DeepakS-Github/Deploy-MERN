const express = require('express');
const router = express.Router();
const BlogSchema = require('../schema/blogSchema');

router.post("/create", async (req,res)=>{
    let data = BlogSchema(req.body);
    let result = await data.save({ writeConcern: { w: 'majority' } } );
    res.send(result);
})

router.get("/list", async (req,res)=>{
    let data = await BlogSchema.find(); 
    res.send(data);
})

module.exports = router;