const express = require('express');
const port = 3000;
const cors = require('cors');
const fs = require('fs');
const { tambahdata, loaddata } = require('./daftar.js');
const test = loaddata();

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('<h1> Hello World! </h1>');
});

app.get('/test', (req, res) => {
  res.send('<h1> Testtt!!! </h1>');
});

module.exports = app;

// app.listen(port, () => {
//   console.log('server sedang berjalan');
// });
