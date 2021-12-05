const express = require("express")
const router = express.Router()
const controller = require("../controllers/doctorController")

router.get("/vaccines", controller.getVaccines);
router.get("/vaccines/:id", controller.getVaccinesById);
router.post("/vaccines", controller.createVaccines);
router.patch("/vaccines/:d/vaccinated", controller.setVaccines);

module.exports = router