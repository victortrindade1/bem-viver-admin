interface IAuth {
  email: string;
  password: string;
}

interface IAuthProvider {
  children: React.ReactNode;
}

interface AuthContextData {
  signed: boolean;
  user: IUser | null;
  signIn(data: IAuth): Promise<void>;
  signOut(): void;
  loading: boolean;
}

interface IUser {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
  avatar?: any;
}

interface IResponse {
  data: {
    token: string;
    user: IUser;
  };
}
