import mongoose from 'mongoose';
import {Livro} from './livro';

const Schema = mongoose.Schema;

export const ComentarioSchema = new Schema({
    comentario: {
        type: String
    },
    autor: {
        type: String
    },
    data_criacao: {
        type: Date,
        default: Date.now
    }
});

export const Comentario = mongoose.model('Comentario', ComentarioSchema);