const getCountries = require("../controllers/getCountries");

const countriesHandler = async (req, res) => {
    try {
        const { name, atributo, continents, order, page, size, activity } = req.query;
        const countries = await getCountries(
            name,
            atributo,
            continents,
            order,
            page,
            size,
            activity
        );
        if (countries.count) {
            return res.status(200).json(countries);
        }
        else {
            return res.status(404).send('Country not matches!');
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = countriesHandler;