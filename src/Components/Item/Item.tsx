import { makeStyles, Theme } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import {useHistory} from 'react-router-dom'
const useStyles = makeStyles((theme: Theme) => ({
  main: {
    border: "1px solid gray",
    padding: "2rem 2vw",
    marginTop: theme.spacing(1),
    borderRadius: 3,
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    display: "flex",
    justifyContent: "space-between",
  },
}));
interface props {
  data: any;
  onDelete: Function;
}
const Item = ({ data, onDelete }: props) => {
  const style = useStyles();
  const { name, quantity, sold, SKU,brand,color,price } = data;
  const history=useHistory()
  return (
    <div className={`${style.main} appear-animated`} style={{ width: "100%" }}>
      <div>
        <Typography variant="h6" component="h6">
          <strong>SKU: {SKU}</strong>- Name: {name}
          <br/>
          <strong>Brand: {brand}</strong>
        </Typography>
        <Typography variant="h6" component="h6">
          <strong>color: {color}</strong>- price: {price}
         
        </Typography>
        <Typography variant="h6" component="h6">
          sold: {sold} , {quantity} left
        </Typography>
      </div>
      <div style={{ width: 90, display: "flex", flexDirection: "column",justifyContent:"center" }}>
        <Button 
        onClick={()=>{
            history.push(`/update/${SKU}`)
        }}
        color="primary" variant="contained" style={{ marginBottom: 4 }}>
          update
        </Button>
        <Button
          onClick={() => {
            onDelete(SKU);
          }}
          color="secondary"
          variant="contained"
        >
          delete
        </Button>
      </div>
    </div>
  );
};

export default Item;
