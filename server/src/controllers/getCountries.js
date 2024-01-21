const { Country, Activity } = require("../db")
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;

const getCountries = async (
    name = "",
    atributo = "name",
    continents = "",
    order = "ASC",
    page = 0,
    size = 10,
    activity = ""
) => {
    const required = activity ? true : false;
    const { count, rows } = await Country.findAndCountAll({
        include: {
            model: Activity,
            as: "Activities",
            where: {
                name: {
                    [Op.iLike]: `${activity}%`,
                },
            },
            required: required
        },
        where: {
            continents: {
                [Op.iLike]: `${continents}%`,
            },

            name: {
                [Op.iLike]: `${name}%`,
            },
        },

        order: [[atributo, order]],

        limit: size,

        offset: page * size,


    });
    return { count, rows };
};

module.exports = getCountries;