var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require("path");
// var mongoose = require('mongoose');


// var mongoURI = "mongodb://localhost:27017/market";
// var MongoDB = mongoose.connect(mongoURI).connection;
//
// MongoDB.on("error", function(err) {
//   console.log("Mongo Connection Error: " + err);
// });
//
// MongoDB.once("open", function() {
//   console.log('Woot Woot! Connected to Mongo');
// });


app.set("port", (process.env.PORT || 5000));

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('server/public'));
app.get('/', function(req, res) {
  res.sendFile(path.resolve("server/public/views/index.html"));
});

app.listen(app.get("port"), function(){
  console.log("listening on port", app.get("port"));
});
