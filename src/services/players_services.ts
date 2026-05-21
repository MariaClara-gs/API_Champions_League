import { PlayerModel } from "../models/player_model";
import { StatisticsModel } from "../models/statistics_model";
import {
  deleteOnePlayer,
  findAllPlayers,
  findAndModifyPlayer,
  findPlayerById,
  insertPlayer,
} from "../repositories/players_repository";
import { badRequest, created, noContent, ok } from "../utils/http_helper";

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

export const getPlayerByIdService = async (id: number) => {
  const data = await findPlayerById(id);
  let response = null;

  if (data) {
    response = ok(data);
  } else {
    response = noContent();
  }

  return response;
};

export const createPlayerService = async (player: PlayerModel) => {
  let response = null;

  if (Object.keys(player).length !== 0) {
    await insertPlayer(player);
    response = created();
  } else {
    response = badRequest();
  }

  return response;
};

export const deletePlayerService = async (id: number) => {
  let response = null;
  const isDeleted = await deleteOnePlayer(id);

  if (isDeleted) {
    response = await ok({ message: "deleted" });
  } else {
    response = await badRequest();
  }

  return response;
};

export const updatePlayerService = async (
  id: number,
  statistics: StatisticsModel,
) => {
  const data = await findAndModifyPlayer(id, statistics);
  let response = null;

  if (Object.keys(data).length === 0) {
    response = await badRequest();
  } else {
    response = await ok(data);
  }

  return response;
};
