// Hoàng Minh Tân 20194367
import React, { useCallback } from "react";
import { makeStyles, Theme } from "@material-ui/core";
import Product from "Modals/Modals";
import ListItem from "Components/ListItem/ListItem";
import {compareMonth} from 'lib/helper'
const useStyles = makeStyles((theme: Theme) => ({
  main: {
    maxWidth: 1200,
    marginTop: 15,
    fontFamily: `'Poppins', sans-serif;`,
    width: "100vw",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: 15,
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
    },
  },
  group: {
    width: "100%",
    overflow: "visible",
    textAlign: "center",
  },
}));
const Home: React.FC = ({ shop, handleShop }: any) => {
  const style = useStyles();
  // hàm xóa sản phẩm
  const handleDelete = useCallback(
    (SKU) => {
      handleShop((state: Array<any>) =>
        [...state].filter((e: any) => e.SKU !== SKU)
      );
    },
    [handleShop]
  );

  return (
    <div className={style.main}>
      <div className={style.group}>
        <h2>Sản phẩm được bán trong tháng hiện tại</h2>

        <ListItem
          handleDelete={handleDelete}
          items={shop.filter((e: Product) => compareMonth(e.lastUpdated))}
          count={shop.length}
        />
      </div>
      <div className={style.group}>
        <h2>10 sản phẩm bán chạy nhất</h2>
        <ListItem
          handleDelete={handleDelete}
          items={[...shop].sort((a, b) => a.sold - b.sold)}
          count={10}
        />
      </div>
    </div>
  );
};
export default Home;
