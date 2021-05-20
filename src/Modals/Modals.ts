
// Hoàng Duy Hưng 20194295
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
  updateItem:Function;
  
  
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
  public lastUpdated:number;
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
    this.lastUpdated=Date.now()-5000000000
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
   public set name(name:string){
      this._name=name
   }
   public set quantity(quantity:number){
    this._quantity=quantity
 }
 public set price(price:number){
  this._price=price
}
public set category(value:string){
  this._category=value
}
public set SKU(value:string){
  this._SKU=value
}
public set brand(value:string){
  this._brand=value
}
public set sold(value:number){
  this._sold=value
}
public set color(value:string){
  this._color=value
}
   public isStock():boolean{
     if(this._quantity>0)
     {
       return true
     }
     return false
   }
   public updateItem(newItem:constructor){
    const {name,quantity,price,category,SKU,brand,color}=newItem
   
    
    if(this.quantity>quantity){
      this.lastUpdated=Date.now()
      this.sold=this.sold+ this.quantity-quantity
      
      
    }
    this.name = name;
    this.quantity = Math.max(quantity,0);
    this.price = Math.max(price,0);
    this.category = category;
    this.SKU=SKU
    this.brand=brand
   
    this.color=color
   }
  
}


export default Products;
