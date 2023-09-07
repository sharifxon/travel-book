const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db')
const cors = require('cors')
const app = express();
app.use(cors())
dotenv.config()

connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended:false}))

app.use('/travel/api', require('./routes/travelRouter'))


const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`server running on ${PORT}`))