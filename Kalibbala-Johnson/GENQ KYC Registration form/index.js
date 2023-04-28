const express = require("express");
const app = express();
const path = require('path')
const router = express.Router();
const mongoose = require('mongoose')
const config = require('./config/database')
const bodyParser = require("body-parser");


const indexRoutes = require('./Routes/indexRoutes');


mongoose.connect(config.database, {
    useNewUrlParser: true,
    useUnifiedTopology: true

})
const db = mongoose.connection
db.once('open', ()=>{
    console.log('connected to db')
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, "public")));





 
app.use("/", indexRoutes )

app.listen(3000, ()=> console.log('listening on port 3000'))