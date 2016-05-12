const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const path = require('path');

// Setup server
const app = express();
app.use(require('connect-livereload')({port: 7777}));

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cookieParser());

app.use('/public', express.static(path.join(__dirname, '..', 'public')));
app.use('/client', express.static(path.join(__dirname, '..', 'client')));

app.get('/:url(api|node_modules|public)/*', (req, res) => {
  res.send(404, 'Resource not found');
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
});

// Define server
const server = require('http').createServer(app);
const port = 3000;

// Start server
server.listen(port, () => {
  console.log(`Cheerio!\nAn awesome node.js server is listening on ${port}.\nAmazing things are about to happen! =)\n`);
});