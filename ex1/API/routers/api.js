import express from 'express';
import { Planta } from '../models/plantas.js';

export const router = express.Router();

router.get('/freguesias', async (req, res) => {
    try {
        const freguesias = await Planta.distinct("Freguesia").sort().exec();
        console.log(freguesias);
        res.json(freguesias);
    } catch(error) {
        console.log('Error getting freguesias: ' + error);
    }
});

router.get('/especies', async (req, res) => {
    try {
        const especies = await Planta.distinct("Espécie").sort().exec();
        console.log(especies);
        res.json(especies);
    } catch(error) {
        console.dir(error);
    }
});

router.get('/', async (req, res) => {
    const query = req.query;
    const filter = {}
    const especie = query.especie;
    if(especie) filter.Espécie = especie
    const implant = req.query.implant;
    if(implant) filter.Implantação = implant;

    console.dir(filter);
    const plantas = await Planta.find(filter).exec();
    console.log(plantas);
    res.json(plantas);
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const planta = await Planta.findOne({Id: id}).exec();
        res.json(planta);
    } catch(error) {
        console.log(error);
        res.send('Nao obtive planta');
    }
});

router.post('/', async(req, res) => {
    const newPlant = req.body;
    console.log(newPlant);
    const document = new Planta(newPlant);
    try {
    await document.save();
        res.status(201).send('Planta inserida com sucesso');
    } catch(error) {
        res.status(500).send('Error inserting plant');
    }
});

router.delete("/:id", async(req, res) => {
    const id = req.params.id;
    try {
        await Planta.deleteOne({Id: id}).exec();
        res.status(200).send("Plant Delete sucessfully");
    } catch(error) {
        res.status(500).send("Error deleting plant");
    }
});
