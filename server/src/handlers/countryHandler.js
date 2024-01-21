const getCountry = require("../controllers/getCountry");

const countryHandler = async (req, res) => {
    try {
        const { idCountry } = req.params;
        const country = await getCountry(idCountry);
        if (country) {
            return res.status(200).json(country);
        } else {
            return res.status(404).send("Country not found");
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = countryHandler;