const http = require('http');
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const connectDb = require('./config/dbConnection')
const dotenv = require('dotenv').config()
const express = require('express')
const { notFound, errorHandler } = require('./middlewares/errorHandler')
const cors = require('cors')
const app = express()

const port = process.env.PORT || 5050
app.use(cors())
//app.use(morgan('dev')).
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())


app.use('/auth', require('./routes/authRoute'))
app.use('/users', require('./routes/userRoute'))
app.use('/products', require('./routes/productRoute'))
app.use('/carts', require('./routes/cartRoute'))
app.use('/orders', require('./routes/orderRoute'))
app.use('/coupons', require('./routes/couponRoute'))

app.use(notFound)
app.use(errorHandler)
app.get("/", (req, res) => { res.send("Express on Vercel"); });

app.listen(port, ()=>{
    connectDb()
    console.log(`Listening to ${port}`);
})

module.exports = app

// const server = http.createServer((req, res) => {
//     // Set the response header
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     // Write some text to the response
//     res.end('Welcome to my simple Node.js app!');
// });
 
// // Define the port to listen on
 
// // Start the server
// server.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });
