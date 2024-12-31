interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  token: string;
  role: "ADMIN" | "USER";
}

type LoginUser = Partial<User, "role", Pick<User, "email" | "password">>;
type RegisterUser = Pick<
  User,
  "username" | "email" | "password",
  Partial<User, "role">
>;
type UpdateUser = Partial<User, "role", Pick<User, "username" | "email">>;
