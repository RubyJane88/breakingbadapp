import { CastModel } from "../components/models/cast-model";
import { api, Endpoints } from "./axios-config";

export async function getCastsAxios() {
  return await api.get<CastModel[]>(Endpoints.breakingcast);
}

export async function searchCastsAxios(query: string) {
  return await api.get<CastModel[]>(`${Endpoints.breakingcast}?name=${query}`);
}
