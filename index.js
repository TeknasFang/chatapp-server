const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require("mongoose")
// const authRoutes = require('./routes/auth')
// const userRoutes = require('./routes/user')
const { initSocket } = require('./socket/index')
const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true
};

const app = express()
require('dotenv').config()
////////////////////////////////////////////////////////////////// DATABASE CONNECTIVITY


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB connection Success"))
  .catch((err) => console.log('DB connection Error', err.message))


////////////////////////////////////////////////////////////////// SERVER CONFIGURATION




app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser(process.env.COOKIE_SIGNATURE))
// app.use('/api/auth', authRoutes)
// app.use('/api/users', userRoutes)

app.get('/', (req, res) => {
  res.sendFile(__dirname+'/index.html')
})

const server = app.listen(process.env.PORT, () => {
  console.log(`App is listening to port ${process.env.PORT}`)
})


//////////////////////////////////////////////////////////////////

initSocket(server, corsOptions)

module.exports = app;
