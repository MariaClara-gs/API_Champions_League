import { Router } from "express";
import {
  deletePlayer,
  getPlayer,
  getPlayerById,
  postPlayer,
  updatePlayer,
} from "./controllers/players_controller";

const router = Router();

router.get("/players", getPlayer);
router.get("/players/:id", getPlayerById);

router.post("/players", postPlayer);

router.delete("players/:id", deletePlayer);

router.patch("/players/:id", updatePlayer);

export default router;
