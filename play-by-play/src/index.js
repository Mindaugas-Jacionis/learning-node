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

// express lesson 2 | CRUD endpoints | mongoose
import express from 'express';
import bodyParser from 'body-parser';
import catRoutes from './catRoutes.js';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/cats');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

catRoutes(app);

const server = app.listen(3000, () => {
  console.log('Server running @ http://127.0.0.1:3000/');
});
