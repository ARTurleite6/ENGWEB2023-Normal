import mongoose from 'mongoose';
import fs from 'fs';
const { Schema } = mongoose;

const plantaSchema = new Schema({
    Id: Number,
    numeroDeRegisto: Number,
    codigoDeRua: Number,
    rua: String,
    local: String,
    freguesia: String,
    especie: String,
    nomeCientífico: String,
    origem: String,
    dataDePlantação: String,
    estado: String,
    caldeira: String,
    tutor: String,
    implantação: String,
    gestor: String,
    dataDeActualização: String,
    numeroDeIntervenções: Number,
});

export const Planta = mongoose.model('plantas', plantaSchema);
