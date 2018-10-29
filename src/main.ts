import servidor from './servidor';
import mongoose from "mongoose";

const porta = process.env.PORT || 3000;
const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/nodebackend';

class Aplicacao {
  public inicia(): void {
    this.iniciaBancoDeDados();
    this.iniciaServidor();
  }

  private iniciaBancoDeDados(): void {
    mongoose.Promise = global.Promise;
    mongoose.connect(mongoUrl);
  }

  private iniciaServidor(): void {
    servidor.listen(porta, () => {
      console.log(`[SERVIDOR] Rodando em http://localhost:${porta}`);
    });
  }
}

new Aplicacao().inicia();