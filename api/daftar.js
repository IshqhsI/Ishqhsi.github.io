// const fs = require('fs');

// const loaddata = () => {
//     let data = fs.readFileSync('./test.json', 'utf-8');
//     data = JSON.parse(data);

//     return data;
// }
const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, './data/daftar.json');


const loaddata = () => {
  try {
    // Gunakan path absolut untuk memastikan keakuratan lokasi file
    let data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Gagal membaca file JSON:', error);
    return null;
  }
};

const tambahdata = (req) => {
    const daftar = {
      nama: req.nama,
      nohp: req.nohp,
      ip_add: req.ip_add
    };

    const Alldaftar = loaddata();
    Alldaftar.push(daftar);

    simpandata(Alldaftar);
    console.log(loaddata());
}

const simpandata = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data));
  console.log('Simpan data sukses!');
};

let test = {
  nama: 'Muhammad Ridhwan',
  nohp: 6282299853131,
  ip_add: '127.1.1:8000'
};

module.exports = {tambahdata, loaddata, test};
