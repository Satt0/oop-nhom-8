import  { useState, useCallback, useMemo, useEffect } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  
} from "@material-ui/core";

import styles from "styles/Style.module.css";
import Products from "Modals/Modals";
import Shirts from 'Modals/Shirt';
import Pants from 'Modals/Pant'
import HandBag from 'Modals/HandBag'
import preload from "Modals/preload";
interface props {
  name: string;
  state: any;
  attribute: Array<Object>;
}
interface state {
  name: string;
  quantity: number;
  price: number;
  category: string;
  SKU: string;
  brand: string;
  sleeve: string;
  hip: string;
  leg: string;
  hasHandle: string;
  material: string;
  size: string;
  color:string
}
interface passedProps{
  shop:any,
  handleShop:Function,
  loadProps:boolean
}
const Input = ({ shop,handleShop ,loadProps}: passedProps) => {

  
  
  const [global, setGlobal] = useState(() => {
    const arr: state = {
      name: "",
      quantity: 0,
      category: "shirt",
      price: 0,
      color:'red',
      SKU: "",
      brand: "",
      sleeve: "long",
      hip: "normal",
      leg: "normal",
      hasHandle: "has",
      material: "fabric",
      size: "normal",
    };
    return arr;
  });

  const handleChange = useCallback(
    (target: string) => {
      return (e: any) => {
        const value: any = e.target.value;

        if (target === "name") {
          setGlobal((state: state) => ({ ...state, name: value }));
        } else if (target === "quantity") {
          if (parseInt(value) > 0) {
            setGlobal((state: state) => ({
              ...state,
              quantity: parseInt(value),
            }));
          }
        } else if (target === "price") {
          if (parseInt(value) > 0) {
            setGlobal((state: state) => ({ ...state, price: parseInt(value) }));
          }
        } else if (target === "category") {
          setGlobal((state: state) => ({ ...state, category: value }));
        } else if (target === "SKU") {
          setGlobal((state: state) => ({ ...state, SKU: value }));
        } else if (target === "brand") {
          setGlobal((state: state) => ({ ...state, brand: value }));
        } else if (target === "sleeve") {
          setGlobal((state: state) => ({ ...state, sleeve: value }));
        } else if (target === "size") {
          setGlobal((state: state) => ({ ...state, size: value }));
        } else if (target === "leg") {
          setGlobal((state: state) => ({ ...state, leg: value }));
        } else if (target === "hip") {
          setGlobal((state: state) => ({ ...state, hip: value }));
        } else if (target === "hasHandle") {
          setGlobal((state: state) => ({ ...state, hasHandle: value }));
        } else if (target === "material") {
          setGlobal((state: state) => ({ ...state, material: value }));
        }
      };
    },
    []
  );
  const handleSubmit = useCallback(
    (e) => {
     
      e.preventDefault();
      const check=Object.entries(global).every(e=>e[1]!==undefined || e[1]!==null);
      if(check){
        let item:Products;
       
       const sold=Math.ceil(Math.random()*global.quantity)
       if(global.category==='shirt')
       {
         item=new Shirts({...global,sold:sold});
       }
       else if(global.category==='pant'){
       item= new Pants({...global,sold:sold});
       }
       else {
        item= new HandBag({...global,sold:sold});
        }
       
     if(preload){
          handleShop((state:Array<Products>)=>{
              const newState=[...state.filter((e:Products)=>e.SKU!==item.SKU),item]
              return newState
          })
     }else{
      handleShop((state:Array<Products>)=>[...state,item])
     }
     alert("successfully!")
     
    }
    else
    {
      alert('something went wrong, please retry!')
      
    }
       
    },
    [global,handleShop]
  );

  const subInput = useMemo(() => {
    const result = [
      {
        category: "shirt",
        props: [
          {
            name: "sleeve",
            state: global.sleeve,
            attribute: [
              { name: "Long", props: "long" },
              { name: "Short", props: "short" },
              { name: "Sleeveless", props: "sleeveless" },
            ],
          },
          {
            name: "size",
            state: global.size,
            attribute: [
              { name: "Over Size", props: "over-size" },
              { name: "Normal", props: "normal" },
              { name: "Crop Top", props: "crop-top" },
            ],
          },
        ],
      },
      {
        category: "pant",
        props: [
          {
            name: "leg",
            state: global.leg,
            attribute: [
              { name: "Long", props: "long" },
              { name: "Short", props: "short" },
              { name: "Normal", props: "normal" },
            ],
          },
          {
            name: "hip",
            state: global.hip,
            attribute: [
              { name: "loose", props: "loose" },
              { name: "Normal", props: "normal" },
              { name: "Tight", props: "tight" },
            ],
          },
        ],
      },
      {
        category: "handBag",
        props: [
          {
            name: "material",
            state: global.material,
            attribute: [
              { name: "leather", props: "leather" },
              { name: "fabric", props: "fabric" },
            ],
          },
          {
            name: "hasHandle",
            state: global.hasHandle,
            attribute: [
              { name: "has", props: "has" },
              { name: "without", props: "without" },
            ],
          },
        ],
      },
    ];

    return result;
  }, [global]);
  const [current, setCurrent] = useState(() => {
    const arr: Array<props> = [];
    return arr;
  });
  useEffect(() => {
    if (subInput.length) {
      const found = subInput.find((e) => e.category === global.category);
      if (found) {
        const array: Array<props> = found.props;
        setCurrent(array);
      }
    }
  }, [subInput, global.category]);
  useEffect(()=>{
    if(shop.name){
      
      
     const oldState=(Object.entries(shop).map(e=>([e[0].substring(1),e[1]])));
     
      setGlobal((state:any)=>{
        let newState={...state}
        oldState.forEach((e:Array<any>)=>{
        newState={...newState,[e[0]]:e[1]}
      })
      return newState
      })     
    }
  },[shop])

  
  return (
    <>
    
    <form onSubmit={handleSubmit} className={styles.main}>
      <FormControl style={{ width: "100%" }} className="appear-animated">
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          required
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={global.category}
          onChange={handleChange("category")}
        >
          <MenuItem value="shirt">Shirt</MenuItem>
          <MenuItem value="pant">Pant</MenuItem>
          <MenuItem value="handBag">Hand Bag</MenuItem>
        </Select>
      </FormControl>
      <TextField
        required
        id="product-name"
        className="appear-animated"
        label="name"
        value={global.name}
        onChange={handleChange("name")}
      />
      <TextField
        required
        type="number"
        id="product-quantity"
        label="quantity"
        className="appear-animated"
        value={global.quantity}
        onChange={handleChange("quantity")}
      />

      <TextField
        type="number"
        required
        id="product-price"
        label="price"
        className="appear-animated"
        value={global.price}
        onChange={handleChange("price")}
      />

      <TextField
        required
        id="product-type"
        label="SKU"
        value={global.SKU}
        disabled={loadProps}
        className="appear-animated"
        onChange={handleChange("SKU")}
      />
      <TextField
        required
        id="product-type"
        label="Brand"
        value={global.brand}
        className="appear-animated"
        onChange={handleChange("brand")}
      />

      {current ? <Custom list={current} handleChange={handleChange} /> : <></>}

      <Button
        className="appear-animated"
        color="primary"
        type="submit"
        variant="contained"
      >
        {loadProps?"Update Item":'Add item'}
      </Button>
    </form>
  </>
  );
};

const Custom = ({ list, handleChange }: any) => {
  return (
    <>
      {list.map((e: any, i: number) => (
        <FormControl
          className="appear-animated"
          key={"subinput" + i}
          style={{ width: "100%" }}
        >
          <InputLabel id="demo-simple-select-label">{e.name}</InputLabel>
          <Select
            required
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={e.state}
            onChange={handleChange(e.name)}
          >
            {e.attribute.map((item: any, id: number) => (
              <MenuItem key={"subinput-item " + i + id} value={item.props}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ))}
    </>
  );
};

export default Input;
