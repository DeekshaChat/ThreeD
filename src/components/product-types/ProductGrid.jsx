import React from "react";
import Product from "./../../pages/Product"; // Import the Product component
import Prod1 from './../../assets/Prod1.jpeg'
import Prod2 from './../../assets/Prod2.png'
import Prod3 from './../../assets/Prod3.jpeg'

const products = [
  { id: 1, name: "3D GLW Series SiO2 Ceramic Detailer", price: "$10", image: {Prod1} },
  { id: 2, name: "3D GLW Series SiO2 Ceramic Glass Cleaner", price: "$20", image: {Prod2} },
  { id: 3, name: "3D GLW Series\nEffortless Products. Incredible Results. Undeniable Glow.", price: "$30", image: {Prod3} },
  { id: 4, name: "3D GLW Series SiO2 Ceramic Interior Detailer", price: "$40", image: {Prod1} },
  { id: 5, name: "3D GLW Series Wheel & Tire Cleaner", price: "$50", image: {Prod2} },
  { id: 6, name: "3D GLW Series Ultimate Wash", price: "$60", image: {Prod3} },
  { id: 7, name: "3D GLW Series Iron Remover", price: "$70", image: {Prod1} },
];

let d = 4.0;
let val = "4.0"
let doubleVal = parseInt(val);
console.log(d);
console.log(doubleVal);
console.log(d+doubleVal);

const ProductGrid = () => {
  return (
    <div className="product-grid">
      {/* First Row */}
      <div className="row">
        <Product product={products[0]} design="design-a" />
        <Product product={products[1]} design="design-a" />
        <Product product={products[2]} design="design-b" />
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
