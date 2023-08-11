
import { CartItem } from "./CartItems";
import {LatLng} from "leaflet";

export class Order{
  id!:number;
  items!: CartItem[];
  totalPrice!:number;
  name!: string;
  address!: string;
  addressLaLng?: LatLng
  paymentId!: string;
  createdAt!: string;
  status!: string;
}