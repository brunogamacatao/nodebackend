import { Router } from "express";
import { AuthUtil } from "../util/auth";

export class Usuarios {       
    public rotas(): Router {
        let router = Router();

        router.post('/', (req, res) => {
            let user = req.body;

            // TODO - Verificar o email e senha

            res.status(200)
                .json({
                    success: true,
                    token: AuthUtil.createJWToken({
                        sessionData: user,
                        maxAge: 3600
                    })
                });
        });

        return router;
    }
}