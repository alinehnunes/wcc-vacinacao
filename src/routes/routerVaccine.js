const express = require("express")
const router = express.Router()
const controller = require("../controllers/controllerVaccine")

router.get("/vaccines", controller.getVaccines);
router.get("/vaccines/:id", controller.getVaccinesById);
router.post("/vaccines", controller.createVaccines);
router.patch("/vaccines/:id/vaccinated", controller.setVaccineted);

module.exports = router