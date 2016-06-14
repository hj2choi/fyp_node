/////////////////////////////////////////////////////////
// variable configurations
////////////////////////////////////////////////////////

var SOME_CONSTANT = 1;

/////////////////////////////////////////////////////////
// app configurations
////////////////////////////////////////////////////////
var express = require("express"); // use express 4
var bodyParser = require("body-parser");
var app = express();
app.set("port", 5000); // open port 5000
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});



/////////////////////////////////////////////////////////
// server APIs (GET & POST request, etc)
////////////////////////////////////////////////////////

// sample documentation
/*
  @brief: GET request, sample URL = "localhost:5000/"
          renders index.html
  @param: none
  @retval: none

  @TODO: none

  @equivalent code:
    function callback(request, response) {  // function definition
      response.render("index");
    }
    app.get("/", callback); // pass function pointer as parameter

*/
app.get("/", function(request, response) {
  console.log("get request");
  response.render("index");
});

/*
  @brief: POST request, sample URL = "localhost:5000/"
          send index.html
  @param: request.body = {
            value: "string"
          }
  @retval: none

*/
app.post("/echo", function(request, response) {
  console.log("POST request");
  response.send({
                  request: "POST",
                  status: 0,
                  retval: request.body.value
                });
});
