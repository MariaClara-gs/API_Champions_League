import express, { json, Request, Response } from "express";

function createApp() {
  const app = express();

  app.use(json()); //converte tudo do corpo da requisição para json

  //rotas com metodos http
  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ player: "beckham" });
  });

  return app;
}

export default createApp;
