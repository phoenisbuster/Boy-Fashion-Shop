const router = require('express').Router()
SECRET_STRIPE = sk_test_51JklHrELIDFJv1qarc5ZpGl36MhnGrtfqVlaM5ObwaBzr6zUA0n6IPd40pT96ny6ZzRzpk2fkTbiczrY4UHxOikZ00ZuN9Wwmg 
const stripe = require('stripe')(process.env.SECRET_STRIPE)

router.post('/payment', (req, res)=>{
    stripe.charges.create({ 
        source: req.body.tokenId,
        ammount: req.body.amount, 
        currency: 'usd'
    }, (err, result)=> {
        if(err)
            return res.status(500).json(err)
        return res.status(200).json(result)
    })
})


module.exports = router