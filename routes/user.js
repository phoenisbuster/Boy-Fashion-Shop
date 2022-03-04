const router = require('express').Router();
const User = require('../models/User')
const { verifyTokenAndAdmin, verifyToken } = require('./verifyToken')

router.put('/:id', verifyTokenAndAdmin, async (req, res) => {
    if(req.body.password){
        req.body.password = CryptoJS.AES.encrypt(req.body.password, "DANGQUOCTHINH").toString()
    }
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true})
        return res.status(200).json(updatedUser)
    }catch(err){
        return res.status(500).json({msg: err.message})
    }
})

router.get('/:id', verifyTokenAndAdmin, (req, res) => {
    try {
        const user = User.findById(req.params.id)
        const {password, ...others} = user._doc
        return res.status(200).json(others)
    } catch(err){
        res.status(500).json({msg: err.message})
    }
})

router.get('/', verifyTokenAndAdmin, async (req, res) => {
    try{
        const users = await User.find()
        return res.status(200).json(users)
    } catch(err){
        return res.status(500).json({msg: err.message})
    }
})

module.exports = router