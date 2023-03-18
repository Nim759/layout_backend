const express =require("express");
var app = express();
const cors = require('cors');
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser")




mongoose.Promise = global.Promise;
mongoose.set('strictQuery', false);

app.use(cors({credentials:true}));
app.use(express.json({limit:'50mb'}))
app.use(bodyParser.json())



var port = process.env.PORT || 6000;



var v1 = require('./Routes');


app.use('/v1', v1.router);


app.use(function(req,res){
    res.status(404).send({url:req.originalUrl+" not found"});
});


mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
   
})



    .then(()=>{
        app.listen(port, () => {
            console.log(`API server is started on: ${port}`);
        });
    })
    .catch(error=>{
        console.error(error.message);
    })
