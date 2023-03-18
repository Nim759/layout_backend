var express = require('express');

var router = express.Router();

router.get('/',function(req,res){
    res.send('welcome to API');
});


require('./locationRoutes')(router);
require('./DeviceRoutes')(router);




module.exports.router = router;