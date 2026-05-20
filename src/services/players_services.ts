import { noContent, ok } from "../utils/http_helper";

export const getPlayerData = async () => {
  const data = { player: "ronaldo" };
  let response = null;

  if (!data) {
    response = await ok(data);
  } else {
    response = await noContent();
  }

  return response;
};
