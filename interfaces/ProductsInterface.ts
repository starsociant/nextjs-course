import { SafeNumberType } from "./commomTypes";

export interface ProductsInterface {
  uuid: string;
  name: string;
  description: string;
  image: string;
  price: SafeNumberType;
}