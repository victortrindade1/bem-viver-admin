interface IAuth {
  email: string;
  password: string;
}

interface IAuthProvider {
  children: React.ReactNode;
}

interface AuthContextData {
  signed: boolean;
  user: object | null;
  signIn(data: IAuth): Promise<void>;
}
