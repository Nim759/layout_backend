var mongoose = require("mongoose");
require("dotenv").config();


var schema = mongoose.Schema;

var LocationSchema = new schema({
name:{
    type:String,
    required:[true,'location Name field is required!'],
  
},

address:{
    type:String, 

},

phone:{
    type:String,

},

devices:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Device'

}],


create_date:{
    type:Date,
    default:Date.now
}

});


const Location =mongoose.model('Location',LocationSchema);
module.exports = {Location}