const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const mongoUri = 'mongodb+srv://dbUser:dbUserPassword@cluster0.wsriqhq.mongodb.net/?retryWrites=true&w=majority'
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({"message": "Hello Crud Node Express"});
});


mongoose.connect(mongoUri)
.then(()=> {
    console.log("Coneected to Mongo DB!")
})
.catch((error)=>{
    console.log(error)
})


app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
