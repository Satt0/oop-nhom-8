import Shirt from "./Products";
import Pant from "./Pant";
import HandBag from "./HandBag";

const shirt1: Shirt = new Shirt({
  name: "T-shirt",
  quantity: 60,
  price: 50000,
  category: "shirt",
  SKU: "SH111",
  brand: "Gucci",
  sold: 12,
  sleeve: "short",
  size: "over-size",
});
const shirt2: Shirt = new Shirt({
  name: "Over size T-shirt",
  quantity: 70,
  price: 90000,
  category: "shirt",
  SKU: "SH1143",
  brand: "Channel",
  sold: 19,
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
  sold: 12,
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
  sold: 12,
  sleeve: "short",
  size: "over-size",
});

export default [
    shirt1,shirt2,shirt3,shirt4
]