var express = require('express');
var router = express.Router();
var fs = require('fs');
//the request object (aka req) is where the text to write is located.
//the response object (aka res) is where you send information back to the client.
router.post('/',function(req,res,next){
  var text = req.body.data;
  var person = req.body.person;
  console.log(person);
    fs.writeFile('ciphertext.txt',text, function(err){
        if (err){
          return console.log(err);
        }
        console.log('File written! :)');
        res.send({happy: "face"});
      });
})
//other modules are directly using this module.exports.
module.exports = router;
