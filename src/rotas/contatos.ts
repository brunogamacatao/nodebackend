import { Router } from "express";

export class Contatos {
    private contatos = [
        {id: 1, nome: 'Fulano',  telefone: '2222-2222'},
        {id: 2, nome: 'Cicrano',  telefone: '3333-3333'},
        {id: 3, nome: 'Beltrano', telefone: '4444-4444'},
    ];

    public rotas(): Router {
        let router = Router();

        router.get('/', (req, res) => {
            res.json(this.contatos);
        });
        router.get('/:id', (req, res) => {
            res.json(
                this.contatos.filter((contato) =>
                    contato.id === +req.params.id
                )[0]
            )
        });
        router.post('/', (req, res) => {
            let contato = req.body;
            this.contatos.push(contato);
            res.json(contato);
        });
        router.put('/:id', (req, res) => {
            let i = -1;
            for(i = 0; i < this.contatos.length; i++) {
                if (this.contatos[i].id === +req.params.id) break;
            }
            this.contatos[i] = req.body;
        });
        router.delete('/:id', (req, res) => {
            let i = -1;
            for(i = 0; i < this.contatos.length; i++) {
                if (this.contatos[i].id === +req.params.id) break;
            }
            this.contatos.splice(i, 1);
        });

        return router;
    }
}