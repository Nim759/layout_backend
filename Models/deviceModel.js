var mongoose = require("mongoose");
require("dotenv").config();


var schema = mongoose.Schema;

var DeviceSchema = new schema({

location:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Location'
    
},

name:{
    type:String,
    required:[true,' Device number field is required!'],
    maxlength:100
},


type:{
    type:String,
    required:true

},

addphoto:{
    type:[String],
    required:false
},

status:{
    type:String,

},


create_date:{
    type:Date,
    default:Date.now
}

});


const Device =mongoose.model('Device',DeviceSchema);
module.exports = {Device}