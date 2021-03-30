import Products from "./Modals";

class Shirt extends Products {
  constructor(
    name: string,
    quantity: number,
    price: number,
    category: string,
    type: string
  ) {
    super(name, quantity, price, category, type);
  }
}

export default Shirt;
