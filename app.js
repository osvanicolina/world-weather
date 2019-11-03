const lugar = require('./lugar/lugar');

const { argv } = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
});

lugar.getLugarLatLng(argv.direccion)
    .then(resp => console.log(resp));