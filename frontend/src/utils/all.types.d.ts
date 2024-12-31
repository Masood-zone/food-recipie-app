interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  token: string;
  role: "ADMIN" | "USER";
}
// Auth Store
interface AuthState {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

type LoginUser = Partial<User, "role", Pick<User, "email" | "password">>;
type RegisterUser = Pick<
  User,
  "username" | "email" | "password",
  Partial<User, "role">
>;
type UpdateUser = Partial<User, "role", Pick<User, "username" | "email">>;

type Errors = {
  response: {
    data: {
      message: string;
    };
  };
};
