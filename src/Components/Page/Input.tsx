import React, { useState, useCallback, useMemo,useEffect } from "react";
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


interface props{
  name: string,
  state: any,
  attribute:Array<Object>
}

const Input: React.FC = ({ handleShop }: any) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("shirt");
  const [SKU, setSKU] = useState("");
  const [brand, setBrand] = useState("");

  // Shirt custom
  const [sleeve, setSleeve] = useState("long");
  const [size, setSize] = useState("normal");
  // Pant custom
  const [leg, setLeg] = useState("normal");
  const [hip, setHip] = useState("normal");
  // Hand Bag custom
  const [material, setMaterial] = useState("leather");
  const [hasHandle, setHandle] = useState("has");
  const handleChange = useCallback(
    (target: string) => {
      return (e: any) => {
        const value: any = e.target.value;
        if (target === "name") {
          setName(value);
        } else if (target === "quantity") {
          setQuantity(parseInt(value));
        } else if (target === "price") {
          setPrice(parseInt(value));
        } else if (target === "category") {
          setCategory(value);
        } else if (target === "SKU") {
          setSKU(value);
        } else if (target === "brand") {
          setBrand(value);
        } else if (target === "sleeve") {
          setSleeve(value);
        } else if (target === "size") {
          setSize(value);
        } else if (target === "leg") {
          setLeg(value);
        } else if (target === "hip") {
          setHip(value);
        }
      };
    },
    [name, quantity, price, category, SKU]
  );
  const handleSubmit = useCallback(
    (e: any) => {
      e.preventDefault();

      const product: Products = new Products(
        name,
        quantity,
        price,
        category,
        SKU,
        brand,
        0
      );

      handleShop((state: Array<Products>) => [...state, product]);
    },
    [name, quantity, price, category, SKU, brand, handleShop]
  );
  const subInput = useMemo(() => {
    const result = [
      {
        category: "shirt",
        props: [
          {
            name: "sleeve",
            state: sleeve,
            attribute: [
              { name: "Long", props: "long" },
              { name: "Short", props: "short" },
              { name: "Sleeveless", props: "sleeveless" },
            ]
          },
          {
            name: "size",
            state: size,
            attribute: [
              { name: "Over Size", props: "over-size" },
              { name: "Normal", props: "normal" },
              { name: "Crop Top", props: "crop-top" },
            ]
          }
        ],
      },
      {
        category: "pant",
        props: [
          {
            name: "leg",
            state: leg,
            attribute: [
              { name: "Long", props: "long" },
              { name: "Short", props: "short" },
              { name: "Normal", props: "normal" },
            ]
          },
          {
            name: "hip",
            state: hip,
            attribute: [
              { name: "loose", props: "loose" },
              { name: "Normal", props: "normal" },
              { name: "Tight", props: "tight" },
            ]
          }
        ],
      },
      {
        category: "handBag",
        props: [
          {
            name: "material",
            state: material,
            attribute: [
              { name: "leather", props: "leather" },
              { name: "fabric", props: "fabric" },
             
            ]
          },
          {
            name: "hasHandle",
            state: hasHandle,
            attribute: [
              
              { name: "has", props: "has" },
              { name: "without", props: "without" },
            ]
          }
        ],
      }
    ];




    return result
  }, [category]);
  const [current,setCurrent]=useState(()=>{
    const arr:Array<props> = []
    return arr
  })
  useEffect(()=>{
    if(subInput.length){
      const found=subInput.find(e=>e.category===category)
      if(found){
       
        // setCurrent(state)
        console.log(typeof found.props);
        const array:Array<props>=found.props
        setCurrent(array)
        
        
      }
    }
  },[subInput,category])
  return (
    <form onSubmit={handleSubmit} className={styles.main}>
      <FormControl style={{ width: "100%" }}>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          required
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
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
        label="name"
        value={name}
        onChange={handleChange("name")}
      />
      <TextField
        required
        type="number"
        id="product-quantity"
        label="quantity"
        value={quantity}
        onChange={handleChange("quantity")}
      />

      <TextField
        type="number"
        required
        id="product-price"
        label="price"
        value={price}
        onChange={handleChange("price")}
      />

      <TextField
        required
        id="product-type"
        label="SKU"
        value={SKU}
        onChange={handleChange("SKU")}
      />
      <TextField
        required
        id="product-type"
        label="Brand"
        value={brand}
        onChange={handleChange("brand")}
      />

      
      {current?<Custom list={current} handleChange={handleChange}/>:<></>}

      <Button color="primary" type="submit" variant="contained">
        Add item
      </Button>
    </form>
  );
};




const Custom=({list,handleChange}:any)=>{

  return <>
    {list.map((e:any)=>(<FormControl style={{ width: "100%" }}>
        <InputLabel id="demo-simple-select-label">{e.name}</InputLabel>
        <Select
          required
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={e.state}
          onChange={handleChange(e.name)}
        >
          
          {e.attribute.map((item:any)=>(<MenuItem value={item.props}>{item.name}</MenuItem>))}
        </Select>
      </FormControl>))}
  </>
}




export default Input;
