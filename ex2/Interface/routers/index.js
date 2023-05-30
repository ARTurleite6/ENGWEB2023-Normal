import axios from 'axios';
import express from 'express';

export const router = express.Router();

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

router.get('/especies/:id'), async(req, res) => {
    const id = req.params.id;
    console.log(id);
    const response = await axios.get('http://localhost:15030/plantas');
    let especies = response.data;
    especies = especies.filter(planta => planta.especie == id).map(planta => {planta.Espécie, planta['Nome Científico']});
    console.log(especies)
}
