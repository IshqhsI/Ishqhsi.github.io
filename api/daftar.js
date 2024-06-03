const fs = require('fs');

const loaddata = () => {
    let data = fs.readFileSync('../test.json', 'utf-8');
    data = JSON.parse(data);

    return data;
}

const tambahdata = (req) => {
    const daftar = {
      nama: req.nama,
      nohp: req.nohp,
      ip_add: req.ip_add
    };

    const Alldaftar = loaddata();
    Alldaftar.push(daftar);

    simpandata(Alldaftar);
}

const simpandata = (data) => {
  // fs.writeFileSync('./data/daftar.json', JSON.stringify(data));
  console.log('Simpan data sukses!');
};

let test = {
  nama: 'Muhammad Ridhwan',
  nohp: 6282299853131,
  ip_add: '127.1.1:8000'
};

// tambahdata(test);
module.exports = {tambahdata, loaddata};
