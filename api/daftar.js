const fs = require('fs');

const loaddata = () => {
    // let data = fs.readFileSync('./data/daftar.json', 'utf-8');
    // data = JSON.parse(data);
    data = [
    {
      "nama": "John Doe",
      "nim": "123456789",
      "jurusan": "Teknik Informatika",
      "angkatan": 2019,
      "ipk": 3.75
    },
    {
      "nama": "Jane Smith",
      "nim": "987654321",
      "jurusan": "Sistem Informasi",
      "angkatan": 2020,
      "ipk": 3.85
    },
    {
      "nama": "Alice Johnson",
      "nim": "456789123",
      "jurusan": "Teknik Elektro",
      "angkatan": 2018,
      "ipk": 3.9
    },
    {
      "nama": "Bob Brown",
      "nim": "321654987",
      "jurusan": "Teknik Industri",
      "angkatan": 2017,
      "ipk": 3.6
    },
    {
      "nama": "Michael Lee",
      "nim": "654321987",
      "jurusan": "Matematika",
      "angkatan": 2021,
      "ipk": 3.95
    }
  ]


    

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
  fs.writeFileSync('./data/daftar.json', JSON.stringify(data));
  console.log('Simpan data sukses!');
};

let test = {
  nama: 'Muhammad Ridhwan',
  nohp: 6282299853131,
  ip_add: '127.1.1:8000'
};

// tambahdata(test);
module.exports = {tambahdata, loaddata};
