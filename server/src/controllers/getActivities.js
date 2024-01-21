const { Country, Activity } = require("../db");
const { Sequelize } = require('sequelize');
const Op = Sequelize.Op;

const getActivities = async (name = "", atributo = "name", order = 'ASC') => {

    const allActivities = await Activity.findAll({
        where: {
            name: {
                [Op.iLike]: `%${name}%`,
            },
        },
        order: [
            [atributo, order],
        ],
    });
    return allActivities;
};

module.exports = getActivities;