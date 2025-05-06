import React from "react";
import Product from "./../../pages/Product"; // Import the Product component
import Prod1 from './../../../public/Prod1.png'
import Prod2 from './../../assets/Prod2.png'
import Prod3 from './../../assets/Prod3.jpeg'
import { products } from "../../data";



let d = 4.0;
let val = "4.0"
let doubleVal = parseInt(val);
console.log(d);
console.log(doubleVal);
console.log(d+doubleVal);

const ProductGrid = () => {
  return (
    <div className="product-grid" style={{ display: "flex", flexDirection: "column", padding: "2rem" }}>
      {/* First Row */}
      <div className="row">
        <Product product={products[0]} design="design-a" />
        <Product product={products[1]} design="design-a" />
        <Product product={products[2]} design="design-c" />
      </div>

      {/* Second Row */}
      <div className="row">
        <Product product={products[3]} design="design-a" />
        <Product product={products[4]} design="design-a" />
        <Product product={products[5]} design="design-a" />
        <Product product={products[6]} design="design-a" />
      </div>
    </div>
  );
};

export default ProductGrid;
