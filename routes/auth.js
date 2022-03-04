const router = require('express').Router();
const User = require('../models/User')
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')

router.post('/register', async (req, res) => {
    try {
        const checkExists = await User.findOne({email: req.body.email})
    
        if(checkExists) return res.json({msg: "The email has been already registered"})
        const newUser = new User({
            username: req.body.username, 
            email: req.body.email, 
            password: CryptoJS.AES.encrypt(req.body.password, "DANGQUOCTHINH").toString()
        })
        
        const savedUser = await newUser.save()

        res.status(200).json(savedUser)
    } catch(err){
        res.status(500).json(err)
    }
})

router.post('/login', async (req, res) => {
    try {
        console.log("ss")
        const user = await User.findOne({email: req.body.email})
        if(!user) return res.status(401).json({msg: "Username is not correact"})
        const hashedPassword = CryptoJS.AES.decrypt(user.password, 
            "DANGQUOCTHINH")
        const psswd = hashedPassword.toString(CryptoJS.enc.Utf8)
        if(req.body.password !== psswd)
            return res.status(401).json({msg: "Password is not correct"})
        const accessToken = jwt.sign({
            id: user._id, isAdmin: user.isAdmin
        }, "DANGQUOCTHINH", {
            expiresIn: '3d'
        })
        res.cookie('token', accessToken, {
            HttpOnly: true
        })
        const {password, ...others} = user._doc;
        return res.status(200).json({user: others, accessToken}) 
    } catch(err){
        return res.status(500).json(err)
    }
})


module.exports = router