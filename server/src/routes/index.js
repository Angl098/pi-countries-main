const { Router } = require("express");
const countriesAllHandler = require('../handlers/countriesAllHandler');
const countriesHandler = require("../handlers/countriesHandler");
const countryHandler = require('../handlers/countryHandler');
const activityHandler = require("../handlers/activityHandler");
const activitiesHandler = require("../handlers/activitiesHandler");

const router = Router();

router.get("/activities", activitiesHandler);
router.post("/activities", activityHandler);
router.get("/countries", countriesHandler);
router.get("/all",countriesAllHandler);
router.get("/:idCountry", countryHandler);

module.exports = router;
