const mongoose  = require('mongoose')
const productSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true,
        unique: true
    }, 
    saleOff: {
        type: Number,
    },
    desc: {
        type: String, 
        require: true
    },
    img: {
        type: String, 
        required: true
    }, 
    cates: {
        type: Array
    },
    size: {
        type: Array
    },
    color: {
        type: Array
    }, 
    price: {
        type: Number, 
        required: true
    },
    isStock: {
        type: Boolean, 
        default: true
    }
    
}, {
    timestamps: true
})

module.exports = mongoose.model('Product', productSchema)