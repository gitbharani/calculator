var express = require('express'),
  app = express(),
  port = 3000;

var routes = require("./api/routes");
routes(app);

if (! module.parent) {
  app.listen(port);
}

console.log("Server running on port " + port);
