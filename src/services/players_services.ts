import {
  findAllPlayers,
  findPlayerById,
} from "../repositories/players_repository";
import { noContent, ok } from "../utils/http_helper";

export const getPlayerData = async () => {
  const data = await findAllPlayers();
  let response = null;

  if (!data) {
    response = await ok(data);
  } else {
    response = await noContent();
  }

  return response;
};
