require('dotenv').config();
const express = require('express');
// const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const app = express();

const ourRouter = require('./routes/ourRoutes');

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.op8yb.mongodb.net/JACKETS?retryWrites=true&w=majority`;

//middleware
app.use(express.json());

app.use((req, res, next) => {
    next();
})


// connection to routes folder
app.use('/api/articles', ourRouter);

//connection to DB
    const connectToDb = async (req, res) => {
        await MongoClient.connect(url);
    }

// start of the server
    connectToDb()
    .then(() => {
        console.log('connected to DB')
        app.listen(process.env.DB_HOST, () => {
            console.log(`listening for the requests on the port ${process.env.DB_HOST}`)
        })
    })
    .catch(err => {
        console.log(err)
    })
    

