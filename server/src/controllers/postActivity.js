const { Country, Activity } = require('../db')

const postActivity = async (name, dificultad, duracion, temporada, countryId) => {
    if (name && dificultad && duracion && temporada) {
        const [activityNew, created] = await Activity.findOrCreate({
            where: {
                name
            },
            defaults: {
                dificultad, duracion, temporada
            }
        })
        if (created) {
            await activityNew.addCountries(countryId);
            return activityNew;
        } else {
            return "La actividad ya existe";
        }
    } else {
        return "Faltan datos";
    }
};

module.exports = postActivity;
