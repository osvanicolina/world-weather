const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const { argv } = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
});

//lugar.getLugarLatLng(argv.direccion)
//    .then(resp => console.log(resp));

clima.getClima(40, -74)
    .then(console.log)
    .catch(err => console.log(err));