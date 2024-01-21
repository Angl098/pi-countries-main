const axios = require('axios');
const { countryData } = require('../helpers/countryData');
const { Country } = require('../db');

const uploadingData = async () => {
    try {
        const countries = (await axios.get('http://localhost:5000/countries')).data;
        const countriesCleaner = countryData(countries);

        // Mapear las operaciones de inserción a un array de promesas
        const insertPromises = countriesCleaner.map(async (country) => {
            await Country.create(country);
        });

        // Esperar a que todas las inserciones se completen antes de continuar
        await Promise.all(insertPromises);

        console.log('Datos subidos correctamente.');
    } catch (error) {
        console.error(error);
    }
};
// const uploadingData = async () => {
//     try {
//         const countries = (await axios.get('http://localhost:5000/countries')).data
//         const countriesCleaner = countryData(countries);
//         return await countriesCleaner.forEach(country => { Country.create(country); });

//     } catch (error) {
//         console.error(error);
//     }
// };

module.exports = uploadingData;