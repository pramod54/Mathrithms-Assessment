const express=require('express');
const router=express.Router();
const us=require('../example.json');

router.get('/',async(req,res)=>{
    try {
        return res.status(200).json({
            status:'success',
            message:'users found successfully',
            data:us
        })
    } catch (err) {
        return res.status(401).json({
            status:'failure',
            message:err.message,
            data:null
        })
    }
})

router.get('/:id',async(req,res)=>{
    try {
        let u=us.filter(x=>x.id===Number(req.params.id));
        return res.status(200).json({
            status:'success',
            message:'user found successfully',
            data:u
        })
    } catch (err) {
        return res.status(401).json({
            status:'failure',
            message:err.message,
            data:null
        })
    }
})


module.exports=router;