import { makeStyles, Theme } from "@material-ui/core";
import { Button } from "@material-ui/core";
import {useHistory} from 'react-router-dom'
const useStyles = makeStyles((theme: Theme) => ({
  main: {
    border: "1px solid gray",
    padding: "4px",
    fontSize:12,
    fontFamily:`'Poppins', sans-serif;`,
    marginTop: theme.spacing(1),
    borderRadius: 3,
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    display: "flex",
    flexDirection:'column',
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
        <h2 >
          <strong>SKU: {SKU}</strong>
          
         
        </h2>
        <h3>Name: {name}</h3>
        <h3>Brand: {brand}</h3>
        <h3 >
          <strong>color: {color}</strong>- price: {price}
         
        </h3>
        <h3>
          sold: {sold} , {quantity} left
        </h3>
      </div>
      <div style={{ width: '100%',marginTop:10, display: "flex",alignItems:"center", flexDirection: "row",justifyContent:"center" }}>
        <Button 
        onClick={()=>{
            history.push(`/update/${SKU}`)
        }}
        color="primary" variant="contained">
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
