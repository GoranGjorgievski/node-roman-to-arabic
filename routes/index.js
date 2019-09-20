var express = require('express');
var router = express.Router();
var utils = require('../public/javascripts/utils')

/* GET default route */
router.get('/', function(req, res, next) {
    if(!req.query || !req.query.roman){
      return res.send({
        data: '',
        error: 'Error! -roman- query parameter is required :)'
      });
    }
    const allowedRegExp = /^[IVXLCDM]+$/i;
    const input = req.query.roman.toUpperCase();
    const dictionary = utils.initDictionary();
    let error = '';

    if (!allowedRegExp.test(input)){
      error = `Invalid number.`;
      arabic = '';
    }

    if (!(input in dictionary)){
      error = utils.isValidRomanNumber(input, dictionary);
      arabic = '';
    }
    else {
      arabic = dictionary[input];
      error = '';
    }
  return res.send({data: arabic, error});
});

module.exports = router;
