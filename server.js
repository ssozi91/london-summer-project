var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();
app.use(express.static('public'))
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
     res.render('profile');
    });
app.get('/about', function (req, res) {
     res.render('about');
    });
app.get('/contact', function (req, res) {
     res.render('contact');
     });
app.listen(process.env.PORT || 2000, function () {
  console.log("Server is listening on port 2000. Ready to accept requests!");
});