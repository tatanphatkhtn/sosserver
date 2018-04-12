var express = require('express');
var router = express.Router();
var FB = require('facebook-node');
FB.setApiVersion("v2.2");


/* GET home page. */

router.get('/', function(req, res, next) {
	var googleLink = req.query.link;
	var loc = req.query.query;
	var token = req.query.token;

	console.log(token);
	FB.setAccessToken(token);

	console.log(googleLink);
	if(googleLink) {
			FB.api('me/feed', 'post', { message: "(Testing) Tôi đang gặp nguy hiểm, vị trí: " + googleLink + '&query='+loc}, function (res) {
 		 if(!res || res.error) {
   		 console.log(!res ? 'error occurred' : res.error);
    	return;
  	}
  	console.log('Post Id: ' + res.id);
  	// res.send("POSTED");
	});
	}
	res.send("POSTED");
});

module.exports = router;
