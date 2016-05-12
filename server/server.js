const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const path = require('path');
const development = (process.env.NODE_ENV === 'production') ? false : true;

// setup server
const app = express();

// inject livereload snippet
if (development) app.use(require('connect-livereload')({port: 7777}));

// setup logger
const loggerMode = (development) ? 'dev' : 'combined';
app.use(logger(loggerMode));

// setup body parser for accepting only parser accepts only UTF-8 encoding content
app.use(bodyParser.urlencoded({extended: false}));

// setup the body parser to accept json and populate req.body
app.use(bodyParser.json());

// use HTTP verbs such as PUT or DELETE where the client doesn't support others
app.use(methodOverride());

// parse the cookie header and populate req.cookies
app.use(cookieParser());

// serve static files
app.use('/public', express.static(path.join(__dirname, '..', 'public')));
app.use('/client', express.static(path.join(__dirname, '..', 'client')));
app.use('/node_modules', express.static(path.join(__dirname, '..', 'node_modules')));

// handle not-found resources
app.get('/:url(api|node_modules|public)/*', (req, res) => {
  res.status(404).send('Resource not found');
});

// serve the main client file
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
});

// define server
const server = require('http').createServer(app);
const port = 3000;

// start server
server.listen(port, () => {
  console.log(`Cheerio!\nAn awesome node.js server is listening on ${port} in ${process.env.NODE_ENV} mode.\nAmazing things are about to happen! =)\n`);
});