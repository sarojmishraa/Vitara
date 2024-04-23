const express  = require('express');
const dotenv = require('dotenv')
const colors = require('colors')
const cor= require('cors')
const morgan = require('morgan');
const ConnectDB = require('./config/db');

dotenv.config()

// mongodb conection
ConnectDB();
const app = express()
// middleware
app.use(express.json())
app.use(cor())
app.use(morgan('dev'))

app.use('/api/v1/test', require("./routes/testRoutes"))


const PORT = process.env.PORT ||8080
app.listen(PORT, ()=>{
    console.log(`Node server running ${PORT}`.bgBlue.white
);
});