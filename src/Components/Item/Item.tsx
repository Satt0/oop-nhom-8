import { makeStyles, Theme } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useURL } from "lib/hook";
import { getPrice } from "lib/helper";
const useStyles = makeStyles((theme: Theme) => ({
  main: {
    border: "1px solid gray",
    padding: "4px",
    fontSize: 12,
    fontFamily: `'Poppins', sans-serif;`,
    fontWeight:'lighter',
    marginTop: theme.spacing(1),
    borderRadius: 3,
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    display: "flex",
    flexDirection: "column",
    textAlign:'left',
    justifyContent: "space-between",
    '& em':{
      color:'blue'
    }
  },
}));
interface props {
  data: any;
  onDelete: Function;
}
const Item = ({ data, onDelete }: props) => {
  const style = useStyles();
  const buttonIsVisible = useURL("home");
  const { name, quantity, sold, SKU, brand, color, price } = data;
  const history = useHistory();
  return (
    <div className={`${style.main} appear-animated`} style={{ width: "100%" }}>
      <div>
        <h2>
          SKU: 
<em> {SKU}</em>
        </h2>
        <h3>Name:  <em> { name}</em></h3>
        <h3>Brand:  <em> {brand}</em></h3>
        <h3>
         color:   <em style={{color:color.toLowerCase()}}> {color} </em> 
        </h3>
        <h3>price:   <em> {getPrice(price)}</em></h3>
        <h3>
          sold:   <em> {sold}</em> {" "} -
          <span >
             <em style={{ color: quantity > 0 ? "" : "red" }}> {quantity} left</em>
          </span>
        </h3>
      </div>
      <div
        style={{
          width: "100%",
          marginTop: 10,
          display: buttonIsVisible ? "flex" : "none",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Button
          onClick={() => {
            history.push(`/update/${SKU}`);
          }}
          style={{marginRight:4}}
          color="primary"
          variant="outlined"
        >
          update
        </Button>
        <Button
          onClick={() => {
            onDelete(SKU);
          }}
          color="secondary"
          variant="outlined"
        >
          delete
        </Button>
      </div>
    </div>
  );
};

export default Item;
