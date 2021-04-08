import Products from "./Modals";

interface input {
  name: string;
  quantity: number;
  price: number;
  category: string;
  SKU: string;
  brand: string;
  sold: number;
  sleeve:string;
  size:string
}
class Shirt extends Products {
  private _sleeve:string;
  private _size:string;
  constructor(data: input) {
    const { name, quantity, price, category, SKU, brand, sold ,sleeve,size}=data
    super({ name, quantity, price, category, SKU, brand, sold });
    this._sleeve=sleeve;
    this._size=size;
  }
  public get sleeve():string{
    return this._sleeve
  }
  public get size():string{
    return this._size
  }
  public showCase():void{
    console.log(this.name,'from shirt');
    
  }
}

export default Shirt;
