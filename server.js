var express = require("express");

var app = express();

app.use("/", express.static(__dirname + "public"));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});

var server = app.listen(process.env.PORT || 8080, function(){
    var port = server.address().port;
    console.log("App now running on port ", port);
});

app.get("/", function(req, res){
    res.sendfile("public/index.html", { root: __dirname + "/public"});
});