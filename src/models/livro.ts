import mongoose from 'mongoose';
import {ComentarioSchema} from './comentario';

const Schema = mongoose.Schema;

export const LivroSchema = new Schema({
    titulo: {
        type: String,
        required: 'O título é obrigatório'
    },
    autor: {
        type: String,
        required: 'O autor é obrigatório'
    },
    ano_de_publicacao: {
        type: Number            
    },
    comentarios: {type: [ComentarioSchema]},
    data_criacao: {
        type: Date,
        default: Date.now
    }
});

export const Livro = mongoose.model('Livro', LivroSchema);