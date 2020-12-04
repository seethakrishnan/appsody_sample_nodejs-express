const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody Testing now latest with redhat image registry with project");
});
 
module.exports.app = app;
