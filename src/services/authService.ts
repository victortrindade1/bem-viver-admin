import api from "services/api";

export default async function signInService(data: IAuth): Promise<IResponse> {
  const response = await api.post("/sessions", data);
  return response;
}
