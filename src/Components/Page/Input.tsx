import React, { useState, useCallback, useMemo, useEffect } from "react";
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
}
const Input: React.FC = ({ handleShop }: any) => {
  const [global, setGlobal] = useState(() => {
    const arr: state = {
      name: "",
      quantity: 0,
      category: "shirt",
      price: 0,
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
        console.log(value,target);
        
        if (target === "name") {
          setGlobal((state: state) => ({ ...state, name: value }));
        } else if (target === "quantity") {
          setGlobal((state: state) => ({
            ...state,
            quantity: parseInt(value),
          }));
        } else if (target === "price") {
          setGlobal((state: state) => ({ ...state, price: parseInt(value) }));
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
        } else if (target === 'hasHandle'){
          setGlobal((state: state) => ({ ...state, hasHandle: value }));

        } else if(target==='material'){
          setGlobal((state: state) => ({ ...state, material: value }));

        }
      };
    },
    [global]
  );
  // const handleSubmit = useCallback(
  //   (e: any) => {
  //     e.preventDefault();

  //     // const product: Products = new Products(
  //     //   name,
  //     //   quantity,
  //     //   price,
  //     //   category,
  //     //   SKU,
  //     //   brand,
  //     //   0
  //     // );

  //     // handleShop((state: Array<Products>) => [...state, product]);
  //   }
    
  // );

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
  return (
    <form 
    // onSubmit={handleSubmit} 
    
    className={styles.main}>
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

      {current ? <Custom  list={current} handleChange={handleChange} /> : <></>}

      <Button 
      className="appear-animated"
      color="primary" type="submit" variant="contained">
        Add item
      </Button>
    </form>
  );
};

const Custom = ({ list, handleChange }: any) => {
  return (
    <>
      {list.map((e: any,i:number) => (
        <FormControl className="appear-animated" key={'subinput'+Math.floor(Math.random()*9999999999)} style={{ width: "100%" }}>
          <InputLabel id="demo-simple-select-label">{e.name}</InputLabel>
          <Select
            required
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={e.state}
            onChange={handleChange(e.name)}
          >
            {e.attribute.map((item: any,id:number) => (
              <MenuItem key={"subinput-item "+i+id} value={item.props}>{item.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      ))}
    </>
  );
};

export default Input;
