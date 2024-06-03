import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
// import test from 'node:test';

createApp({
  data() {
    return {
      message: 'Hello Kamu',
      jalan:
        'Jl. Kuripan No.21 A, RT.03, Kuripan, Kec. Banjarmasin Tim., Kota Banjarmasin, Kalimantan Selatan',
      linkMap: 'https://maps.app.goo.gl/3YwVxzGNhZDoG2Hy8',

      datadaftar: []
    };
  },

  mounted() {
    axios.get('http://localhost:3000/api/test').then((response) => {
      this.datadaftar = JSON.parse(JSON.stringify(response.data));

      console.log(this.datadaftar);
    });


  },

  methods: {
    getdata() {
      // alert('tes');

      let test = this.datadaftar;
      console.log(test);
      test.forEach(element => {
        alert('tes');
        console.log(element);
      });
    },
  },
}).mount('#app');
