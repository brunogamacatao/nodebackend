import { Router } from "express";

export class ApiGenerica {       
    public rotas(): Router {
        let router = Router();

        router.get('/', (req, res) => {
            res.send('Retorna todos os registros');
        });
        router.get('/:id', (req, res) => {
            res.send(`Retorna o registro com id ${req.params.id}`);
        });
        router.post('/', (req, res) => {
            res.send('Registro adicionado');
        });
        router.put('/:id', (req, res) => {
            res.send(`Altera o registro com id ${req.params.id}`);
        });
        router.delete('/:id', (req, res) => {
            res.send(`Remove o registro com id ${req.params.id}`);
        });

        return router;
    }
}