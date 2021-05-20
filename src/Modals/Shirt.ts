// Hoàng Duy Hưng 20194295
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
  color:string
}
class Shirt extends Products {
  private _sleeve:string;
  private _size:string;
  constructor(data: input) {
    const { name, quantity, price, category, SKU, brand, sold ,sleeve,size,color}=data
    super({ name, quantity, price, category, SKU, brand, sold ,color});
    this._sleeve=sleeve;
    this._size=size;
  }
  public get sleeve():string{
    return this._sleeve
  }
  public get size():string{
    return this._size
  }
  public set size(value:string){
    this._size=value;
  }
  public set sleeve(value:string){
    this._sleeve=value
  }
  
  public updateItem(data:input){
    const { name, quantity, price, category, SKU, brand, sold ,sleeve,size,color}=data
    super.updateItem({name,quantity,price,category,SKU,color,brand,sold})
    this.sleeve=sleeve;
    this.size=size;
    console.log('====================================');
    console.log(sleeve,size);
    console.log('====================================');
  }
}

export default Shirt;
