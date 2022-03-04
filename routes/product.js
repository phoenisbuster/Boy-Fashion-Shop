const router = require('express').Router();
const Product = require('../models/Product')
const { verifyTokenAndAdmin, verifyToken } = require('./verifyToken')


router.put('/:id', verifyTokenAndAdmin, async (req, res) => {
    try{
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true})
        return res.status(200).json(updatedProduct)
    }catch(err){
        return res.status(500).json({msg: err.message})
    }
} )

router.get('/:id', async (req, res)=>{
    try {
        const product = await Product.findById(req.params.id)
        console.log(product)
        return res.status(200).json(product)
    } catch(err){
        res.status(500).json({msg: err.message})
    }
})

router.post('/', async (req, res) => {
    try {
        let products;
        const qCategory = req.body.category;
        const qSize = req.body.size;
        const qColor = req.body.color;
        
        console.log(qCategory, qSize, qColor)

        if(qCategory)
        {
            if(qSize && qColor)
            {
                products = await Product.find({cates: {
                    $in: [qCategory]
                }, size: {
                    $in: [qSize]
                }, color: {
                    $in: [qColor]
                }})
            }
            else if(qSize){
                products = await Product.find({cates: {
                    $in: [qCategory]
                }, size: {
                    $in: [qSize]
                }})
            } else if(qColor){
                products = await Product.find({cates: {
                    $in: [qCategory]
                }, color: {
                    $in: [qColor]
                }})

            }
            else 
            {
                products = await Product.find({cates: {
                    $in: [qCategory]
                }})
            }
        }
        else 
            products = await Product.find()

        return res.status(200).json(products)
    } catch(err){
        res.status(500).json({msg: err.message})
    }
})
module.exports = router