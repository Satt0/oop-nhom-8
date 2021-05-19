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
  color:string
}
class Pant extends Products {
  private _leg:string;
  private _hip:string
  constructor(data: input) {
    const { name, quantity, price, category, SKU, brand, sold ,leg,hip,color}=data
    super({ name, quantity, price, category, SKU, brand, sold ,color});
    this._leg=leg;
    this._hip=hip;
  }
  public get leg():string{
    return this._leg
  }
  public get hip():string{
    return this._hip
  }
  public set hip(value:string){
    this._hip=value
  }
  public set leg(value:string){
    this._leg=value
  }
  public updateItem(data:input){
    const { name, quantity, price, category, SKU, brand, sold ,hip,leg,color}=data
    super.updateItem({name,quantity,price,category,SKU,color,brand,sold})
    this._hip=hip;
    this._leg=leg;
    console.log('====================================');
    console.log(hip,leg,'from pant');
    console.log('====================================');
  }
}

export default Pant;
