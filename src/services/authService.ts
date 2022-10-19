import api from "services/api";

interface IResponse {
  data: {
    token: string;
    user: {
      name: string;
      email: string;
    };
  };
}

export default async function signInService(data: IAuth): Promise<IResponse> {
  const response = await api.post("/sessions", data);
  return response;
}
