import Products from "./Modals";

interface input {
  name: string;
  quantity: number;
  price: number;
  category: string;
  SKU: string;
  brand: string;
  sold: number;
  leg:string;
  hip:string
}
class Pant extends Products {
  private _leg:string;
  private _hip:string
  constructor(data: input) {
    const { name, quantity, price, category, SKU, brand, sold ,leg,hip}=data
    super({ name, quantity, price, category, SKU, brand, sold });
    this._leg=leg;
    this._hip=hip;
  }
  public get leg():string{
    return this._leg
  }
  public get hip():string{
    return this._hip
  }
}

export default Pant;
