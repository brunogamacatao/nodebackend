import { Router } from "express";
import { Carro } from '../models/carro';

export class Carros {
    public rotas(): Router {
        let router = Router();

        router.get('/', (req, res) => {
            Carro.find({}, (erro, carros) => {
                if (erro) res.send(erro)
                else res.json(carros)
            })
        });
        router.get('/:id', (req, res) => {
            Carro.findById(req.params.id, (erro, carro) => {
                if (erro) res.send(erro)
                else res.json(carro)
            })
        });
        router.post('/', (req, res) => {
            new Carro(req.body).save((erro, carro) => {
                if (erro) res.send(erro)
                else res.json(carro)
            })
        });
        router.put('/:id', (req, res) => {
            Carro.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (erro, carro) => {
                if (erro) res.send(erro)
                else res.json(carro)
            })
        });
        router.delete('/:id', (req, res) => {
            Carro.findByIdAndRemove(req.params.id, (erro, carro) => {
                if (erro) res.send(erro)
                else res.json(carro)
            })
        });

        return router;
    }
}