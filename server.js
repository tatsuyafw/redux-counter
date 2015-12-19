var path = require('path');
var express = require('express');
var app = express();

app.use('/', express.static(path.join(__dirname, 'pub')));

app.listen(3000, function(err){
  if (err) {
    console.error(err);
  } else {
    console.info("Listening http://localhost:%s", 3000);
  }
});
