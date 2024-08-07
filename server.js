const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const connectDb = require('./config/dbConnection')
const dotenv = require('dotenv').config()
const express = require('express')
const { notFound, errorHandler } = require('./middlewares/errorHandler')
const cors = require('cors')
const app = express()

// const port = process.env.PORT || 5050
const port = 5002
app.use(cors())
//app.use(morgan('dev')).
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())


app.get('/', (req, res) => {
  res.status(200).json('Welcome, your app is working well');
})
app.use('/auth', require('./routes/authRoute'))
app.use('/users', require('./routes/userRoute'))
app.use('/products', require('./routes/productRoute'))
app.use('/carts', require('./routes/cartRoute'))
app.use('/orders', require('./routes/orderRoute'))
app.use('/coupons', require('./routes/couponRoute'))


app.use(notFound)
app.use(errorHandler)

// app.listen(port, ()=>{
//     connectDb()
//     console.log(`Listening to ${port}`);
// })

app.get('/home', (req, res) => {
    res.status(200).json('Welcome, your app is working well');
  })
  
  
app.listen(port, () => {
    connectDb()
    console.log(`Server running at http://localhost:${port}`);
  });
  
  // Export the Express API
module.exports = app

