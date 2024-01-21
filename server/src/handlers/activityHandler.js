const postActivity = require('../controllers/postActivity');

const activityHandler = async (req, res) => {
try {
    const { name, dificultad, duracion, temporada, countryId } = req.body;
    const newActivity = await postActivity(name, dificultad, duracion, temporada, countryId);
    if (newActivity) res.status(200).json(newActivity);
} catch (error) {
    return res.status(500).json({error: error.message }); 
}
}

module.exports = activityHandler;