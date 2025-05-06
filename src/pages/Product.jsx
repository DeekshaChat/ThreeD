import { useNavigate } from "react-router";
import Heading from "../components/Heading";
import Product1 from "../components/product-types/Product1";
// import Prod1 from '../assets/Prod1.png'

const Product = ({ product, design }) => {
  const navigate = useNavigate();
  console.log('image', product.image);
  
  return (

    <div className={`product-card ${design}`}>
      <div>
        <img src={product.image} alt={product.name} />
        <div style={{ padding: "10px" , height: 60}}>
        <h3>{product.name}</h3>
        </div>
      </div>
      <div style={styles.container}>
        <button style={{ color: "white" }} onClick={() => navigate('/product-detail', { state: product })}>Explore</button>
      </div>
    </div>
  );
};

const styles ={
  container: {
    display: "flex",
    backgroundColor: "green", 
    // position: 'absolute',
    // bottom: 0,
    // left:0,
    
    width: "95%",
    alignSelf: "flex-end",
    // alignItems: "center",
    justifyContent:"center",
    borderRadius: "10px",
    padding: "10px",
    marginBottom: "10px",
    marginLeft: "10px",
    marginRight: "10px",
  }
}
export default Product;