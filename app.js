const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody Testing now latest....!");
});
 
module.exports.app = app;
