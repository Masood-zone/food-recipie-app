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
// Header props
interface HeaderProps {
  title: string;
  description: string;
  className?: string;
  buttons: ButtonInfo[];
}

// Types

type LoginUser = Partial<User, "role", Pick<User, "email" | "password">>;
type RegisterUser = Pick<User, "username" | "email" | "password"> & {
  role: "USER";
};
type UsersTable = Pick<User, "id" | "username" | "email" | "role">;
type UpdateUser = Partial<User, "role", Pick<User, "username" | "email">>;
type CreateAdmin = Pick<User, "username" | "email" | "password"> & {
  role: "ADMIN";
};
type UpdateAdmin = Partial<User, "role", Pick<User, "username" | "email">>;

type Errors = {
  response: {
    data: {
      message: string;
    };
  };
};
