const Vaccine = require("../models/modelVaccine")

const getVaccines = async(req, res) => {
    try {
        const vaccine = await Vaccine.findAll();
        if (vaccine) {
            res.status(200).send(vaccine)
        } else {
            res.status(404).send({ message: `Nenhuma vacina encontrada.` })
        }
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const getVaccinesById = async(req, res) => {
    const vaccineId = req.params.id
    try {
        const vaccine = await Vaccine.findOne({
            where: { id: vaccineId }
        })
        if (vaccine) {
            res.status(200).send(vaccine)
        } else {
            res.status(404).send({ message: `Vacina de id = ${vaccineId} não  encontrada.` })
        }
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const createVaccines = async(req, res) => {
    const { id, name, expected_date} = req.body 
    try {
        const vaccine = await Vaccine.create({ id, name, expected_date });
        console.log(`Vacina ${vaccine.name} foi cadastrada.`);
        res.status(201).send(vaccine);
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const setVaccineted = async(req, res) => {
    const vaccineId = req.params.id;
    try {
        const rowUpdated = await Vaccine.update({vaccinated: true});
        if (rowUpdated > 0) {
            res.status(200).send({ message: "Vacina marcada." })
        } else {
            res.status(404).send({ message: "Vacina nao encontrada." })
        }
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

module.exports = {
    getVaccines,
    getVaccinesById,
    createVaccines,
    setVaccineted
}