const axios = require('axios');

const { argv } = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
});

const encodeUrl = encodeURI(argv.direccion);
console.log(encodeUrl);
const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
    headers: { 'x-rapidapi-key': '422e04f3d3mshc633a01181b4161p172596jsn3ad21bc83ef9' }
});


instance.get()
    .then(resp => console.log(resp.data.Results[0]))
    .catch(err => console.log('ERROR!!!!!', err));