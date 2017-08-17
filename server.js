const exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'profile' }));
app.set('view engine', 'handlebars');