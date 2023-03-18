const {Location}= require("../Models/locationModel")
const {Device} = require("../Models/deviceModel")

//CREATE

exports.registerLocation =  (req,res) => {
    const locationcreate = new Location(req.body)


    locationcreate.save((err,doc) =>{
        if(err){
            return res.status(422).json({
                sucess:false,
                message:"Registration faild,check the validation errors",
                data:err
            
            });
        }else{
            return res.status(200).json({
            success:true,
            message:"Successfully Registered"
            
            });
            
        }
    });
}

//UPDATE
exports.locationUpdated = async (req,res) => {

    try {
        const updatedLocation = await Location.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true});
        return res.status(200).json(updatedLocation);
    } catch (error) {
        res.status(500).json(error);
    }
}

//DELETE

exports.locationDeleted = async (req,res) => {

    try {
        await Location.findByIdAndDelete(req.params.id)
        return res.status(200).json("Location Deleted")
    } catch (error) {
        res.status(500).json(error)
    }
}

//GET
exports.LocationID = async (req,res) => {


  try {
      const location = await Location.findById(req.params.id)
      return res.status(200).json(location)
  } catch (error) {
      res.status(500).json(error)
  }
}

//GET ALL

exports.Locations = async (req,res) => {


    try {
        const locations = await Location.find()
        return res.status(200).json(locations)
    } catch (error) {
        res.status(500).json(error)
    }
}

//add devices to location

exports.AddDevices = async (req, res) => {

    try{
        const location = await Location.findById(req.parms.id);
        const device = new Device({
            name:req.body.name,
            location:location._id
        });
        await device.save();
        location.devices.push(device);
        await location.save();
        res.status(201).jason(device);

    }catch (err){
        res.status(400).json({message:err.message})
    }
}

//get devices according to location

exports.getDevices = async (req,res) => {

     try{
        const location = await Location.findById(req.parms.id).populate('devices');
        res.json(location.devices);
     }catch (err){
        res.status(500).json({message:err.message});
     }
}