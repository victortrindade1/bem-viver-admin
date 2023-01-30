import api from "services/api";

export default async function signInService({
  email,
  password,
}: IAuth): Promise<IResponseSessionStore> {
  const response = await api.post("/sessions", { email, password });
  return response;
}
