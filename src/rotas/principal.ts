import { Router } from "express";

export class Principal {       
    public rotas(): Router {
        let router = Router();

        router.get('/', (req, res) => {            
            res.send('Funciona !!!');
        });

        return router;
    }
}