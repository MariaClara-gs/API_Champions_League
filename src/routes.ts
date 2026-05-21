import { Router } from "express";
import {
  deletePlayer,
  getPlayer,
  getPlayerById,
  postPlayer,
  updatePlayer,
} from "./controllers/players_controller";
import { getClubs } from "./controllers/clubs_controller";

const router = Router();

//players
router.get("/players", getPlayer);
router.get("/players/:id", getPlayerById);
router.post("/players", postPlayer);
router.delete("players/:id", deletePlayer);
router.patch("/players/:id", updatePlayer);

//clubs
router.get("/clubs", getClubs);

export default router;
