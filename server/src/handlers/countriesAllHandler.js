const getAllCountries = require("../controllers/getAllCountries");

const countriesAllHandler = async (req, res) => {
    const { name } = req.query;
    try {
        const allCountries = await getAllCountries(name);
        if (allCountries.count) {
            return res.status(200).json(allCountries);
        }
        else {
            return res.status(404).send('Country no encontrado');
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = countriesAllHandler;