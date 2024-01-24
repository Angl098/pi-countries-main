const axios = require('axios');
const { countryData } = require('../helpers/countryData');
const { Country } = require('../db');

const uploadingData = async () => {
    try {
        const countries = (await axios.get('http://localhost:5000/countries')).data
        const countriesCleaner = countryData(countries);
        return await countriesCleaner.forEach(country => { Country.create(country); });
    } catch (error) {
        console.error(error);
    }
};

module.exports = uploadingData;