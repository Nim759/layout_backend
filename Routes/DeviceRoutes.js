module.exports = function(app){
   
 
    const DeviceController = require("../controllers/deviceController");
    
    
        //create
        app.post("/device",DeviceController.registerDevice);
    
        //update
        app.put("/device/:id",DeviceController.deviceUpdated);
        
        //delete
        app.delete("/device/:id",DeviceController.deviceDeleted);
        
        //get event
        app.get("/device/find/:id",DeviceController.deviceID);
        
        //get all events
        app.get("/devices",DeviceController.Devices);

}