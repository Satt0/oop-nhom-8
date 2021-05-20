// Hoàng Duy Hưng 20194295
import Shirt from "./Shirt";
import Pant from "./Pant";

import Products from './Modals'

const shirt1: Shirt = new Shirt({
  name: "T-shirt",
  quantity: 0,
  price: 50000,
  category: "shirt",
  SKU: "SH111",
  brand: "Gucci",
  sold: 134,
  sleeve: "short",
  color:'red',
  size: "over-size",
});
const shirt2: Shirt = new Shirt({
  name: "Over size T-shirt",
  quantity: 70,
  price: 90000,
  category: "shirt",
  SKU: "SH1143",
  color:'orange',
  brand: "Channel",
  sold: 193,
  sleeve: "long",
  size: "normal",
});
const shirt3: Shirt = new Shirt({
  name: "T-shirt",
  quantity: 60,
  price: 50000,
  category: "shirt",
  SKU: "SH117",
  brand: "Gucci",
  sold: 126,
  color:'blue',
  sleeve: "short",
  size: "over-size",
});
const shirt4: Shirt = new Shirt({
  name: "T-shirt",
  quantity: 60,
  price: 50000,
  category: "shirt",
  SKU: "SH115",
  brand: "Gucci",
  sold: 144,
  sleeve: "short",
  color:'yellow',
  size: "over-size",
});
const pant1: Pant = new Pant({
  name: "Pant",
  quantity: 60,
  price: 50000,
  category: "pant",
  SKU: "PA165",
  brand: "Gucci",
  sold: 184,
  leg: "normal",
  color:'pink',
  hip: "normal",
});
const arr:Array<Products>=[
    shirt1,shirt2,shirt3,shirt4,pant1
]
export default arr