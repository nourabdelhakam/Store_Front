export type User = {
  id?: number;
  first_name: string;
  last_name: string;
  password: string | number;
};

export type Create_User = {
  first_name: string;
  last_name: string;
  password: string | number;
};
