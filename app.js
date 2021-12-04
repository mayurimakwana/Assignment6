require("dotenv").config();
const express = require('express')
const app = express()
const port = 3000



const customer=require("./customer")
const mongoose = require("mongoose")

mongoose
    .connect(process.env.MONGOURL)
    .then(() => console.log("Moongo db connect"))
    
app.get('/', (req, res) => res.send('Welcome to Online customer Management System'))

app.use("/customer",customer);

app.listen(port, () => console.log(`customer Management System  listening on port ${port}!`))