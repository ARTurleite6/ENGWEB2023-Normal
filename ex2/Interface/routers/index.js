import axios from 'axios';
import express from 'express';

export const router = express.Router();

router.get('/especies/:id', async(req, res) => {
    const id = req.params.id;
    console.log(id);
    const response = await axios.get('http://localhost:15030/plantas/especies/' + id);
    const plantas = await axios.get('http://localhost:15030/plantas?especie=' + id);
    const especie = response.data;
    console.log(especie[0]);
    res.render('especie', {especie: especie[0], plantas: plantas.data})
});


router.get('/', async (req, res) => {
    const plantas = await axios.get('http://localhost:15030/plantas');
    console.log(plantas.data);
    res.render('index', { plantas: plantas.data })
});

router.get('/:id', async(req, res) => {
    const id = req.params.id;
    const planta = await axios.get('http://localhost:15030/plantas/' + id);
    console.log(planta.data);
    res.render('planta', {planta: planta.data});
});
