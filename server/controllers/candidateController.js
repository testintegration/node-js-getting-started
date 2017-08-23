var express = require('express');
var router = express.Router()

router.get('/', (req, res) => {
  res.send('enter candidatec controller.js');
});



router.get('/:engagement_id/candidates', (req, res) => {
  res.send('engagement_id/candidates');
});

router.get('/:contact_id/document/:document_id', (req, res) => {
    res.send('contact_id/document/:document_id');
});

module.exports = router;
