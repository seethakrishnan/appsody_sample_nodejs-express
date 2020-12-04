const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody Testing now!");
});
 
module.exports.app = app;
