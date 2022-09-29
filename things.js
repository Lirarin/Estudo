var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
   res.send('GET route operational.');// 
});
router.post('/', function(req, res){
   res.send('POST route reporting for duty.');
});

//export this router to use in our index.js
module.exports = router;