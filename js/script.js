import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

createApp({
  data() {
    return {
      message: 'Hello Kamu',
      jalan:
        'Jl. Kuripan No.21 A, RT.03, Kuripan, Kec. Banjarmasin Tim., Kota Banjarmasin, Kalimantan Selatan',
      linkMap: 'https://maps.app.goo.gl/3YwVxzGNhZDoG2Hy8',
    };
  },

  mounted() {
    axios.get('http://localhost:3000/test').then((response) => {
      console.log(response.data);
    });
  },
}).mount('#app');
