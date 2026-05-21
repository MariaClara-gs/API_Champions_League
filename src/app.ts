import express, { json } from "express";
import { getPlayer } from "./controllers/players_controller";
import router from "./routes";
import cors from "cors";

function createApp() {
  const app = express();

  app.use(json()); //converte tudo do corpo da requisição para json

  //uso de rotas com metodos http
  app.use("/api", router);

  /*const corsOptions = {
    origin: "http://exemplo.sistem.com",
    methods: ["GET"],
  };*/
  app.use(cors(/*corsOptions*/)); //define enderecos de acesso

  return app;
}

export default createApp;
