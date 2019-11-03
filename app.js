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

/*
clima.getClima(40, -74)
    .then(console.log)
    .catch(err => console.log(err));
*/

const getInfo = async(direccion) => {
    try {
        const dir = await lugar.getLugarLatLng(direccion);
        const dir_weather = await clima.getClima(dir.lat, dir.lng);
        return `El clima de ${direccion} es: ${dir_weather}`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(err => console.log(err.message));