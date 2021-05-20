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
  public get hasHandle(){
    return this._hasHandle;
  }
  public get material(){
    return this._material
  }
  public set hasHandle(value:string){
    this._hasHandle=value
  }
  public set material(value:string){
    this._material=value
  }
  public updateItem(data:input){
    const { name, quantity, price, category, SKU, brand, sold ,hasHandle,material,color}=data
    super.updateItem({name,quantity,price,category,SKU,color,brand,sold})
    this._hasHandle=hasHandle;
    this._material=material;
    console.log('====================================');
    console.log(hasHandle,material,'from hb');
    console.log('====================================');
  }
}

export default HandBag;
