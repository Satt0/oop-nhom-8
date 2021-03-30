class Product implements modal {
  private _name: string;
  private _quantity: number;
  private _price: number;
  private _category: string;
  private _SKU:string;
  private _brand:string;
  private _sold:number;
  constructor(
    name: string,
    quantity: number,
    price: number,
    category: string,
    SKU:string,
    brand:string,
    sold:number

  ) {
    this._name = name;
    this._quantity = quantity;
    this._price = price;
    this._category = category;
    this._SKU=SKU
    this._brand=brand
    this._sold=sold
  }
  public get name(): string {
    return this._name;
  }
  public get quantity(): number {
    return this._quantity;
  }
  public get category():string{
    return this._category;
   }
   public get price():number{
    return this._price;
   }
   
   public isStock():boolean{
     if(this._quantity>0)
     {
       return true
     }
     return false
   }
}
interface modal {

  isStock:Function;
  
}

export default Product;
