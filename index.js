const express = require('express')
const app = express()
const router = express.Router();
const dotenv = require("dotenv");

const port = 3000
const dateObject = new Date();

dotenv.config();
app.set('json spaces', 40);
app.set("view engine", "ejs");

 



app.get('/', (req,res) => {
  res.status(200).json({timestamp: Date.now(), hostname: process.env.HOSTNAME, engine: process.version, ip: req.ip})
} )

app.listen(port, () => {
    console.log(`Microservice app listening on port ${port}`)
  })