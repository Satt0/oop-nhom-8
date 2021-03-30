import Products from "./Modals";

class Shirt extends Products {
  constructor(
    name: string,
    quantity: number,
    price: number,
    category: string,
    SKU:string,
    brand:string,
    sold:number
  ) {
    super(name, quantity, price, category,SKU,brand,sold);
  }
}

export default Shirt;
