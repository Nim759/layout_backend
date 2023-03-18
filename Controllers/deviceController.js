const {Device}= require("../Models/deviceModel")

//CREATE

exports.registerDevice =  (req,res) => {
    const devicecreate = new Device(req.body)


    devicecreate.save((err,doc) =>{
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
exports.deviceUpdated = async (req,res) => {

    try {
        const updatedDevice = await Device.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true});
        return res.status(200).json(updatedDevice);
    } catch (error) {
        res.status(500).json(error);
    }
}

//DELETE

exports.deviceDeleted = async (req,res) => {

    try {
        await Device.findByIdAndDelete(req.params.id)
        return res.status(200).json("Device Deleted")
    } catch (error) {
        res.status(500).json(error)
    }
}

//GET
exports.deviceID = async (req,res) => {


  try {
      const device = await Device.findById(req.params.id)
      return res.status(200).json(device)
  } catch (error) {
      res.status(500).json(error)
  }
}

//GET ALL

exports.Devices = async (req,res) => {


    try {
        const devices = await Location.find()
        return res.status(200).json(devices)
    } catch (error) {
        res.status(500).json(error)
    }
}

