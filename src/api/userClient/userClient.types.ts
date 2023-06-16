export type CreateUserClient = {
  id?: number;
  name: string;
  lastname: string;
  email: string;
  avatar: string;
  password: string;
  rol_id: number;
};

export type UserClient = {
  id?: number;
  name: string;
  lastname: string;
  email: string;
  avatar: string;
  rol_id?: number;
};
