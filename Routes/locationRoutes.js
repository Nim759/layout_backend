module.exports = function(app){
   
 
    const LocationController = require("../controllers/locationController");
    
    
        //create
        app.post("/location",LocationController.registerLocation);
    
        //update
        app.put("/location/:id",LocationController.locationUpdated);
        
        //delete
        app.delete("/location/:id",LocationController.locationDeleted);
        
        //get location
        app.get("/location/find/:id",LocationController.LocationID);
        
        //get all location
        app.get("/locations",LocationController.Locations);

        //add devices
        app.post("/locations/:id/devices",LocationController.AddDevices);

        //get devices
        app.get("/location/:id/devices",LocationController.getDevices);

}