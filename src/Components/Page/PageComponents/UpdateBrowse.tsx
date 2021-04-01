import { useState, useCallback, useEffect } from "react";
import ListItem from "Components/ListItem/ListItem";
import { Box } from "@material-ui/core";
import Filter from "Components/Filter/Filter";
import Products from "Modals/Modals";
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
    console.log(name,SKU,brand);
    
  },[shop,handleShop])
  useEffect(() => {
    if (shop.length) {
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
