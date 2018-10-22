import express from 'express';
import * as bodyParser from 'body-parser';
import {Contatos} from './rotas/contatos';
import { Principal } from './rotas/principal';
import { ApiGenerica } from './rotas/api-generica';
import { Livros } from './rotas/livros';

class Servidor {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.configuraMiddleware();
    this.configuraRotas();
  }

  // Configura o middleware
  private configuraMiddleware(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configura as rotas da aplicação
  private configuraRotas(): void {
    this.app.use('/', new Principal().rotas());
    this.app.use('/api', new ApiGenerica().rotas());
    this.app.use('/contatos', new Contatos().rotas());
    this.app.use('/livros', new Livros().rotas());
  }
}

export default new Servidor().app;