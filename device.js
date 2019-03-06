var express = require('express');
var router = express.Router();

var mongoose=require('mongoose');

//get the schema
require('./device_schema.js');
//get the model created for device
var Devices=mongoose.model('Device');

router.get('/', function(req, res){
    Devices.find({},(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    });
  
 });

router.post('/', function(req, res){
      var newDevice = new Devices(req.body);
      newDevice.save(function(err,data){
          if(err){
              res.send(err);
          }else{
              res.send(data);
          }
      })
    });

    router.put('/:id', (req, res) => {
    Devices.findByIdAndUpdate(
        // the id of the item to find
        req.params.id,
        
        // the change to be made. Mongoose will smartly combine your existing 
        // document with this change, which allows for partial updates too
        req.body,
        
        // an option that asks mongoose to return the updated version 
        // of the document instead of the pre-updated one.
        {new: true},
        
        // the callback function
        (err, data) => {
        // Handle any possible database errors
            if (err) return res.status(500).send(err);
            return res.send(data);
        }
    )
})
    
    router.delete('/:id', (req, res) => {
        Devices.deleteOne({
            _id: req.params.id
        }, function (err,data) {
            if (err) {
                res.send(err);    
            }
            return res.send(data);

        }
        )
    });


    
//export this router to use in our index.js
module.exports = router;