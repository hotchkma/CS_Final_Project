var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var fs = require('fs');

var app = express();
var port = process.env.PORT || 3000;

var postData = require('./posts');

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.json());


app.use(express.static('public'));


app.get('/', function (req, res) {
  //res.status(200).sendFile(path.join(__dirname, 'public', 'index.html'));
   res.status(200).render('home', {
	posts: postData
   });
});

app.post('/post', function( req, res, next) {
  console.log("--------")
	console.log(req.body);
	postData.push({
		item: req.body.item,
		photo: req.body.photo,
		comments: req.body.comments,
		contacts: req.body.contacts,
		password: req.body.password
	});

	var content = JSON.stringify(postData);
	fs.writeFile('./posts.json', content, (err)  => {
		if (err) throw err;
	});

	res.status(200).send("Posted Successfully!");
});

app.post('/delete', function(req, res, next){
  console.log(req.body.num);
  var num = parseInt(req.body.num,10);
  console.log(num);
  console.log("-=-Before-=-");
  console.log(postData);
  console.log("-=-After-=-");
  postData.splice(num,1);
  console.log(postData);

  var content = JSON.stringify(postData);
	fs.writeFile('./posts.json', content, (err)  => {
		if (err) throw err;
	});
});

app.get('*', function (req, res) {
  res.status(200).render('404');
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
