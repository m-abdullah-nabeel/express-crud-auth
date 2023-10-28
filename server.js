const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const mongoUri = 'mongodb+srv://dbUser:dbUserPassword@cluster0.wsriqhq.mongodb.net/?retryWrites=true&w=majority'
const PORT = 3000

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const stoneRouter = require("./routers/stone")
app.use('/', stoneRouter);

mongoose.connect(mongoUri, {useNewUrlParser: true})
const con = mongoose.connection

con.on('open', ()=>{
    console.log("Connected to MongoDB!")
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
