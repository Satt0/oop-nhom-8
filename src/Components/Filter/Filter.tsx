import {
  TextField
} from "@material-ui/core";
import { useState, useCallback, useEffect } from "react";
import {makeStyles,Theme} from '@material-ui/core'

const useStyles=makeStyles((theme:Theme)=>({
  main:{
    display:'grid',
    gridTemplateColumns:'1fr 1fr 1fr 1fr',
    gridGap:5

  }
}))
interface props {
  handleSearch: Function;
}
const Filter = ({ handleSearch }: props) => {

  const styles=useStyles()


  const [state, setState] = useState(() => {
    return {
      name: "",
      color:"",
      SKU: "",
      brand: "",
    };
  });

  const onChange = useCallback(
    (target) => {
      return (e: any) => {
        const value = e.target.value;
        setState((state: any) => ({ ...state, [target]: value }));
      };
    },
    []
  );
  useEffect(() => {
    handleSearch(state.name, state.SKU, state.brand,state.color);
  }, [state,handleSearch]);
  return (
    <form className={styles.main}>
      <TextField
        type="text"
        required
        id="product-name"
        label="Name"
        placeholder="enter product name"
        className="appear-animated"
        value={state.name}
        onChange={onChange("name")}
      />
      <TextField
        type="text"
        required
        id="product-SKU"
        label="SKU"
        placeholder="enter product SKU"
        className="appear-animated"
        value={state.SKU}
        onChange={onChange("SKU")}
      />
      <TextField
        type="text"
        required
        id="product-brand"
        label="Brand"
        placeholder="enter product Brand"
        className="appear-animated"
        value={state.brand}
        onChange={onChange("brand")}
      />
      <TextField
        type="text"
        required
        id="product-color"
        label="Color"
        placeholder="enter product Color"
        className="appear-animated"
        value={state.color}
        onChange={onChange("color")}
      />
      
    </form>
  );
};

export default Filter;
