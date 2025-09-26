import type { Address } from "./address";

export type Users = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
};
