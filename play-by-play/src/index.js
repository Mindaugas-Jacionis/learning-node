// initial node.js implementation
// import { createServer } from 'http';
//
// createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello Basic Setup World!\n');
// }).listen(3000, '127.0.0.1');
//
// console.log('Server running @ http://127.0.0.1:3000/');

// express lesson 1
// import express from 'express';
// const app = express();
//
// app.get('/', (req, res) => {
//   // res.send('Hello Express World!');
//   res.json({ hello: 'express world' });
// }).listen(3000, () => {
//   console.log('Server running @ http://127.0.0.1:3000/');
// });

// express lesson 2 | endpoints
import express from 'express';
import bodyParser from 'body-parser';
import Cats from './Cats.js';

const app = express();
const cats = new Cats(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencode({
  extended: true
}));

app.get('/', (req, res) => {
  // res.send('Hello Express World!');
  res.json({ hello: 'express world' });
}).listen(3000, () => {
  console.log('Server running @ http://127.0.0.1:3000/');
});
