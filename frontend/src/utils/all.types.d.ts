interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  token: string;
  role: "ADMIN" | "USER";
}

// Category
interface Category {
  id: number;
  type: string;
  image: string;
  recipes: Recipe[];
}

// Recipe
interface Recipe {
  id: number;
  image: string;
  title: string;
  description: string;
  quantity: number;
  price: number;
  total: number;
  category: Pick<Category, "id" | "type" | "image">;
  categoryId: number;
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

// All Types
type LoginUser = Partial<User, "role", Pick<User, "email" | "password">>;
type RegisterUser = Pick<User, "username" | "email" | "password"> & {
  role: "USER";
};
type UsersTable = Pick<User, "id" | "username" | "email" | "role">;
type CustomersTable = Pick<User, "id" | "username" | "email" | "role">;
type UpdateUser = Partial<User, "role", Pick<User, "username" | "email">>;
type CreateAdmin = Pick<User, "username" | "email" | "password"> & {
  role: "ADMIN";
};
type UpdateAdmin = Partial<User, "role", Pick<User, "username" | "email">>;

// Category, Recipe
type CategoriesTable = Pick<Category, "id" | "type" | "image">;
type CreateCategory = FormData;
type UpdateCategory = Partial<Category, "image", Pick<Category, "type">>;

type ProductsTable = Pick<
  Recipe,
  | "id"
  | "title"
  | "description"
  | "quantity"
  | "price"
  | "total"
  | "category"
  | "image"
>;
type CreateProduct = Pick<
  Recipe,
  "title" | "description" | "quantity" | "price" | "categoryId" | "image"
>;
type UpdateProduct = Partial<
  Recipe,
  "image",
  Pick<
    Recipe,
    "title" | "description" | "quantity" | "price" | "total" | "categoryId"
  >
>;

type Errors = {
  response: {
    data: {
      message: string;
    };
  };
};
