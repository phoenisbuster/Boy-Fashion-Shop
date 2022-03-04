const Order = require('../models/Order')
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin, } = require("./verifyToken");

const router = require('express').Router()

router.post('/', async (req, res) => {
    try {
        const newOrder = new Order(req.body)
        await newOrder.save()
        return res.status(200).json(newOrder)
    }catch(err){
        return res.status(500).json({msg: err.message})
    }
})

router.get('/', verifyTokenAndAdmin, async (req, res)=> {
    try {
        const orders = await Order.find();
        return res.status(200).json(orders);
    }catch(err){
        return res.status(500).json({msg: err.message})
    }
})

router.put('/:id', verifyTokenAndAdmin, async (req, res)=>{
    try {
        const updatedUser = await Order.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true})
        return res.status(200).json(updatedOrder)
    }catch(err){
        return res.status(500).json({msg: err.message})
    }
})

router.delete('/:id', verifyTokenAndAdmin, async (req, res)=> {
    try {
        await Order.findByIdAndDelete(req.params.id);
        return res.status(200).json({msg: "Order has been deleted..."});
    }catch(err){
        return res.status(500).json({msg: err.message})
    }
})

router.get('/find/:userId', verifyTokenAndAuthorization, async (req, res)=> {
    try {
        const orders = await Order.find({userId: req.params.userId})
        return res.status(200).json(orders);  
    }catch(err){
        return res.status(500).json({msg: err.message})
    }
})

module.exports = router