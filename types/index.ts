// Just throwing all the types in a single file here for simplicity

export type User = {
  id: string;
  first: string;
  last: string;
  role: "Design" | "Engineering" | "CTO" | "Developer Experience";
  photo: string;
  admin?: boolean;
};

export type FetchUserData = {
  users: {
    [key: string]: User;
  };
};

export type Users = {
  users: User[];
};
