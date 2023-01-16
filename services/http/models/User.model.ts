export interface UserDTO {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    city: string;
  };
  company: { name: string };
}

export type GetUsersDTO = UserDTO[];
