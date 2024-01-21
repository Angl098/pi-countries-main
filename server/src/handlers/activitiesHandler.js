const getActivities = require('../controllers/getActivities');

const activitiesHandler = async (req, res) => {
    try {
        const { name, atributo, order } = req.params;
        const activities = await getActivities(name, atributo, order);
        if (activities) {
            return res.status(200).json(activities);
        } else {
            return res.status(404).send("No hay actividades");
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = activitiesHandler;