//import mongoose
const mongoose = require('mongoose');

//password mongodb 
const password = encodeURIComponent(process.env.MDB_PASSWORD);
const url = `mongodb+srv://${process.env.MDB_USER}:${password}@cluster0.ojgiepk.mongodb.net/?retryWrites=true&w=majority`;

mongoose.set('strictQuery', true) // mongoose will ensure that only the fields that are specified in your Schema will be saved in the database

//mongose connect with db and mongoose options
mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology:true
})

// connection
const dbConn = mongoose.connection;

//handle error
dbConn.on("error", console.log.bind(console, "connection error"));
dbConn.on("open",()=>{
    console.log("DB connection Scussefull");
})

module.exports = dbConn;