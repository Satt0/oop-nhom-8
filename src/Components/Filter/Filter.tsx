import {
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button,
  } from "@material-ui/core";
  import {useState  } from 'react'
interface props{
    handleSearch:Function
}
const Filter=({handleSearch}:props)=>{


        return <form>

<TextField
        type="text"
        required
        id="product-price"
        label="Name"
        placeholder="enter product name"
        className="appear-animated"
        
        
      />
      <TextField
        type="text"
        required
        id="product-SKU"
        label="SKU"
        placeholder="enter product SKU"
        className="appear-animated"
        
        
      />
      <TextField
        type="text"
        required
        id="product-brand"
        label="Brand"
        placeholder="enter product Brand"
        className="appear-animated"
        
        
      />
      <Button color="primary" variant="outlined">Search</Button>
        </form>
}


export default Filter;