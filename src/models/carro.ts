import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const CarroSchema = new Schema({
    modelo: {
        type: String
    },
    marca: {
        type: String
    },
    ano: {
        type: Number            
    },
    data_criacao: {
        type: Date,
        default: Date.now
    }
});

export const Carro = mongoose.model('Carro', CarroSchema);