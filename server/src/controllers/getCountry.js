const { Country, Activity } = require("../db");

const getCountry = async (idCountry) => {
    const countryDetail = await Country.findOne({
        where: { id: idCountry },
        include: {
            model: Activity,
            as: "Activities"
        },
    });
    return countryDetail;
};

module.exports = getCountry;