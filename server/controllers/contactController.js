let express = require('express');
let router = express.Router();



router.post('/login', function (req, res) {
  console.log('login');
});

// Activate Password Reset Flow
router.post('/reset_password', function (req,res) {
  console.log('reset_password');
});



module.exports = router;
