const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const PORT = 3000
const db_name = 'Tanglay-Stones-Quotation_System'
const mongoUri = `mongodb+srv://dbUser:dbUserPassword@cluster0.wsriqhq.mongodb.net/${db_name}?retryWrites=true&w=majority`

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const stoneRouter = require("./routers/stone")
app.use('/stone', stoneRouter);

mongoose.connect(mongoUri, {useNewUrlParser: true})
const con = mongoose.connection

con.on('error', console.error.bind(console, 'MongoDB connection error:'));

con.on('open', ()=>{
    console.log("Connected to MongoDB!")
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
