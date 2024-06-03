const express = require('express');
const port = 3000;
const cors = require('cors');
const fs = require('fs');
const { tambahdata, loaddata } = require('./daftar.js');
const test = loaddata();

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/test', (req, res) => {
  res.json(test);
});

// app.listen(port, () => {
//   console.log('server sedang berjalan');
// });
