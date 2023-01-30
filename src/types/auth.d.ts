// interface ISubmitUser {
//   name?: string;
//   email?: string;
//   newPassword?: string;
//   confirmPassword?: string;
// }

interface IAuth {
  email: string;
  password: string;
}

// interface IAuthProvider {
//   children: React.ReactNode;
// }

// interface AuthContextData {
//   signed: boolean;
//   user: IUser | null;
//   signIn(data: IAuth): Promise<void>;
//   signOut(): void;
//   loading: boolean;
//   updateUser(data: IUser): void;
// }

interface IUser {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
  avatar?: any;
  token: string;
}

interface IResponseSessionStore {
  data: {
    user: IUser;
  };
}
