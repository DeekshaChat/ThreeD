import Heading from "../components/Heading";
import Product1 from "../components/product-types/Product1";
import Prod1 from '../assets/Prod1.jpeg'

const Product = ({ product, design }) => {
  console.log('image', product.image);
  
  return (
    <div className={`product-card ${design}`}>
      <img src={Prod1} alt={product.name} />
      <h3>{product.name}</h3>
    </div>
  );
};
export default Product;