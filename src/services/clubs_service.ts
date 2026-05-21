import * as HttpResponse from "../utils/http_helper";
import * as repository from "../repositories/clubs_repository";

export const getClubService = async () => {
  const data = await repository.findAllClubs();
  const response = HttpResponse.ok(data);
  return response;
};
