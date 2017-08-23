const express = require('express')
const app = express()
app.set('port', (process.env.PORT || 5000));
var appRoutes = require('./server/routes/app');

app.use('/', appRoutes);

// if nothing is matched from appRoutes above e.g. on node app.js, it will print no routes found!! not really!
app.use(function (req, res, next) {
    console.log('no routes found!!');

});

// this is key to use process.env.PORT!! to run this on Heroku
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
