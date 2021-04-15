import Products from "./Modals";

interface input {
  name: string;
  quantity: number;
  price: number;
  category: string;
  SKU: string;
  brand: string;
  sold: number;
  hasHandle:string;
  material:string
  color:string;
}
class HandBag extends Products {
  private _hasHandle:string;
  private _material:string;
  constructor(data: input) {
    const { name, quantity, price, category, SKU, brand, sold ,hasHandle,material,color}=data
    super({ name,color, quantity, price, category, SKU, brand, sold });
    this._hasHandle=hasHandle;
    this._material=material;
  }
}

export default HandBag;
