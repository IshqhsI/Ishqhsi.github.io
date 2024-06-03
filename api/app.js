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

app.get('/api/test', (req, res) => {
    res.send('Test World!');
});

// app.listen(port, () => {
//   console.log('server sedang berjalan');
// });
