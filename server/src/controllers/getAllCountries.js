const { Country, Activity } = require("../db");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;

const getAllCountries = async (name) => {
    const { count, rows } = await Country.findAndCountAll({
        include: {
            model: Activity,
            as: "Activities"
        },
        where: {
            name: {
                [Op.iLike]: `${name}%`,
            },
        },
        order: [["name", "ASC"]],

    });
    return { count, rows };
};

module.exports = getAllCountries;