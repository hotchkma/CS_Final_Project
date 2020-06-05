var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var port = process.env.PORT || 3000;


app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', function (req, res) {
  //res.status(200).sendFile(path.join(__dirname, 'public', 'index.html'));
   res.status(200).render('home');
});

app.post('/:person', function( req, res, next) {

});

app.get('*', function (req, res) {
  res.status(200).render('404');
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
