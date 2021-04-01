import { useState, useCallback, useEffect } from "react";
import ListItem from "Components/ListItem/ListItem";
import { Box } from "@material-ui/core";
import Filter from "Components/Filter/Filter";
import Products from "Modals/Modals";

const compare:Function=(str1:string,str2:string)=>{
  const length=Math.min(str1.length,str2.length)
  return str1.substring(0,length).toLowerCase()===str2.substring(0,length).toLowerCase()
}
interface props {
  shop: Array<any>;
  handleShop: Function;
}
export default function UpdateBrowse({ shop, handleShop }: props) {
  const [search, setSearch] = useState(() => {
    let arr: Array<Products> = [];
    return arr;
  });

  const handleDelete = useCallback(
    (SKU) => {
      handleShop((state: Array<any>) =>
        [...state].filter((e: any) => e.SKU !== SKU)
      );
    },
    [shop]
  );
  const handleSearch=useCallback((name:string,SKU:string,brand:string)=>{
    const newState:Array<Products>=[...shop].filter((e:any)=>{
      let result=true;
      if(name!=='')
      {
        result=compare(e.name,name)
      }
      if(SKU!==''){
        result=result && compare(e.SKU,SKU)
      }
      if(brand!==''){
        result=result && compare(e.brand,brand)
      }
      return result
    })
    setSearch(newState)
    
    
  },[shop,handleShop])
  useEffect(() => {
    if (shop!==null) {
      setSearch(shop);
    }
  }, [shop]);
  return (
    <Box style={{ maxWidth: 768, margin: "0 auto", padding: "4rem 2vw" }}>
      <Filter handleSearch={handleSearch} />
      <ListItem count={999} items={search} handleDelete={handleDelete} />
    </Box>
  );
}
