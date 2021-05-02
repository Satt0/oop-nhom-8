import React,{useCallback} from "react";
import { makeStyles, Theme ,Typography} from "@material-ui/core";

import ListItem from "Components/ListItem/ListItem";

const useStyles = makeStyles((theme: Theme) => ({
  main: {
    maxWidth: 1200,
    padding:theme.spacing(2),
    width: "100vw",
    margin: "0 auto",
    display:'grid',
    gridTemplateColumns:'1fr 1fr',
    gridGap:15,
    flexWrap:'wrap'
    ,
    [theme.breakpoints.down('sm')]:{
      gridTemplateColumns:'1fr'
    }
  },
  group: {
      width:'100%',
      overflow:'visible',
      textAlign:'center',
      
  },
}));
const Home: React.FC = ({ shop,handleShop }: any) => {
  
  const style = useStyles();

  const handleDelete=useCallback((SKU)=>{
    handleShop(((state:Array<any>) =>[...state].filter((e:any)=>e.SKU!==SKU)))
  },[handleShop])
  
  
  
  return (
    <div className={style.main}>
      <div className={style.group}>
      <Typography variant="h6" component="h6">
      Recently Added Product
</Typography>
          
          <ListItem handleDelete={handleDelete} items={shop} count={10}/>
      </div>
      <div className={style.group}> 
      
      <Typography variant="h6" component="h6">
      Top 10 Products of the Months
</Typography>
      <ListItem handleDelete={handleDelete} items={[...shop].sort((a,b)=>a.sold-b.sold)} count={10}/>
      </div>
    </div>
  );
};
export default Home;
