require('dotenv').config();
var express = require('express');
var exphbs  = require('express-handlebars');
var getMyWork = require('./myWork.js');

var returnHtml = require('./readMe.js')

var app = express();
app.use(express.static('public'))
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

console.log(returnHtml())
app.get('/readMe', function (req, res) {
    console.log('Return Html', returnHtml())
     res.render('readMe',returnHtml());
    });

app.get('/my-work', function (req, res) {
     res.render('my-work',getMyWork());
    });
app.get('/', function (req, res) {
     res.render('profile');
    });
app.get('/about', function (req, res) {
     res.render('about');
    });
app.get('/contact', function (req, res) {
     res.render('contact');
    });
app.get('/myGames', function (req, res) {
     res.render('myGames');
     });
app.listen(process.env.PORT || 2000, function () {
  console.log("Server is listening on port 2000. Ready to accept requests!");
});