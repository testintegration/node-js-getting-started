var express = require('express');
var router = express.Router();
var contactController = require('../controllers/contactController');
var candidateController = require('../controllers/candidateController');


router.use('/api/v1/candidate', candidateController);
router.use('/api/v1/contact', contactController);

// if no routes is matched to above controllers.
// candidateController: routes is relative to /api/v1/candidate
router.get('/', function (req, res, next) {
  res.send('appRoutes get /: hello world!');
});


module.exports = router;
