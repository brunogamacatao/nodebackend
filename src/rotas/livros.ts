import { Router } from "express";
import { Livro } from '../models/livro';
import { Comentarios } from './comentarios';

export class Livros {
    public rotas(): Router {
        let router = Router();

        router.get('/', (req, res) => {
            Livro.find({}, (erro, livros) => {
                if (erro) res.send(erro)
                else res.json(livros)
            })
        });
        router.get('/:id', (req, res) => {
            Livro.findById(req.params.id, (erro, livro) => {
                if (erro) res.send(erro)
                else res.json(livro)
            })
        });
        router.post('/', (req, res) => {
            new Livro(req.body).save((erro, livro) => {
                if (erro) res.send(erro)
                else res.json(livro)
            })
        });
        router.put('/:id', (req, res) => {
            Livro.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (erro, livro) => {
                if (erro) res.send(erro)
                else res.json(livro)
            })
        });
        router.delete('/:id', (req, res) => {
            Livro.findByIdAndRemove(req.params.id, (erro, livro) => {
                if (erro) res.send(erro)
                else res.json(livro)
            })
        });

        // Rotas dos comentários (rota aninhada)
        router.use('/:id/comentarios', (req: any, res: any, next) => {
            Livro.findById(req.params.id, (erro, livro) => {
                if (erro) res.send(erro)
                else req.livro = livro
                next()
            }).populate('comentarios');
        }, new Comentarios().rotas());

        return router;
    }
}