export type User = {
  id?: number;
  firstname: string;
  lastname: string;
  password: string | number;
};

export type Create_User = {
  firstname: string;
  lastname: string;
  password: string | number;
};
