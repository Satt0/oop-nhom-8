class Product implements modal {
  private _name: string;
  private _quantity: number;
  private _price: number;
  private _category: string;
  private _type: string;

  constructor(
    name: string,
    quantity: number,
    price: number,
    category: string,
    type: string
  ) {
    this._name = name;
    this._quantity = quantity;
    this._price = price;
    this._category = category;
    this._type = type;
  }
  public get name(): string {
    return this._name;
  }
  public get quantity(): number {
    return this._quantity;
  }
  public get catergory():string{
    return this._category;
   }
   public get price():number{
    return this._price;
   }
   public get type():String{
    return this._type;
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
