const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const orderRoute = require('./routes/order')
const cors = require('cors')
const productRoute = require('./routes/product')
const cookieParser = require('cookie-parser')

const app = express()
dotenv.config()

mongoose.connect(process.env.DB_URL, (err) => {
    if(err) throw error
    console.log("DB connected successfully")
})

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use(cors())
app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)
app.use('/api/products', productRoute)

app.listen(process.env.PORT, (err) => {
    if(err) throw err
    console.log(`This app running on port ${process.env.PORT}`)
})