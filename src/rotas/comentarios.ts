import { Router } from "express";
import { Livro } from '../models/livro';
import { Comentario } from '../models/comentario';

export class Comentarios {
    public rotas(): Router {
        let router = Router();

        router.get('/', (req:any, res:any) => {
            res.json(req.livro.comentarios)
        });
        router.post('/', (req:any, res:any) => {
            req.livro.comentarios.push(new Comentario(req.body));
            req.livro.save((erro: any, livro: any) => {
                if (erro) res.send(erro)
                else res.json(livro)
            })
        });

        return router;
    }
}