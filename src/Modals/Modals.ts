

interface constructor{
  name: string,
    quantity: number,
    price: number,
    category: string,
    SKU:string,
    brand:string,
    sold:number,
    color:string

}
interface item {
   
  isStock:Function;
  
  
}
class Products implements item {
  private _name: string;
  private _quantity: number;
  private _price: number;
  private _category: string;
  private _SKU:string;
  private _brand:string;
  private _sold:number;
  private _color:string;
  constructor(
    {
      name,
      quantity,
      price,
      category,
      SKU,
      brand,
      sold,
      color
    }:constructor
  ) {
    this._name = name;
    this._quantity = Math.max(quantity,0);
    this._price = Math.max(price,0);
    this._category = category;
    this._SKU=SKU
    this._brand=brand
    this._sold=sold
    this._color=color
  }
  public get name(): string {
    return this._name;
  }
  public get quantity(): number {
    return this._quantity;
  }
  public get color():string{
    return this._color;
  }
  public get category():string{
    return this._category;
   }
   public get price():number{
    return this._price;
   }
   public get SKU():string{
    return this._SKU;
   }
   public get brand():string{
    return this._brand;
   }
   public get sold():number{
    return this._sold;
   }
   public isStock():boolean{
     if(this._quantity>0)
     {
       return true
     }
     return false
   }
  
}


export default Products;
