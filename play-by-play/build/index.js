'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)(); // import { createServer } from 'http';
//
// createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello Basic Setup World!\n');
// }).listen(3000, '127.0.0.1');
//
// console.log('Server running @ http://127.0.0.1:3000/');

app.get('/', function (req, res) {
  res.send('Hello Express World!');
  //res.json({ hello: 'express world' });
}).listen(3000, function () {
  console.log('Server running @ http://127.0.0.1:3000/');
});