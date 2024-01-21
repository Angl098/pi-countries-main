const countryData = function (array) {
    return array.map((country) => {
        return {
            id: country.cca3,
            name: country.name.common,
            imagen: country.flags.png,
            continents: country.region,
            capital: country.capital ? country.capital[0] : "No se encontró una capital",
            subregion: country.subregion ? country.subregion : "No se encontró una subregion",
            area: country.area,
            poblacion: country.population,
        }
    })
}

module.exports = { countryData };