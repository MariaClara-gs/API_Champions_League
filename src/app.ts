import express, { json } from "express";
import { getPlayer } from "./controllers/players_controller";
import router from "./routes";

function createApp() {
  const app = express();

  app.use(json()); //converte tudo do corpo da requisição para json

  //uso de rotas com metodos http
  app.use("/api", router);

  return app;
}

export default createApp;
