const express = require('express');
const port = 3000;
const cors = require('cors');
const fs = require('fs');
const { tambahdata, loaddata, test } = require('./daftar.js');
const bodyParser = require('body-parser');

let ip_add;

const data = loaddata();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
  ip_add = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  // console.log('Alamat IP pengguna:', ipAddress);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/test', (req, res) => {
  res.json(data);
});

app.get('/test-input', (req, res) => {
  // tambahdata(test);
   res.send('Data berhasil ditambahkan'); 
})

app.post('/daftar-badminton', (req, res) => {
  let request_data = req.body;
  request_data.push(ip_add);

  tambahdata(request_data);
});

module.exports = app;

// app.listen(port, () => {
//   console.log('server sedang berjalan');
// });
