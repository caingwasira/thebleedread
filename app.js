const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());
app.use(expressLayouts);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static("views"));

// Routes
app.use('/', require('./routes'))
app.use('/blog', require('./routes/blog'))
app.use('/about', require('./routes/about'))
app.use('/contact', require('./routes/contact'))
app.use('/resources', require('./routes/resources'))

const PORT =  process.env.PORT || 8080;
app.listen( PORT, () => console.log(`Server started on port ${PORT}`));
