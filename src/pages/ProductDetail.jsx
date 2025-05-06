
import React from 'react'
import { useLocation, useParams } from 'react-router';

const ProductDetail = () => {

  const {state: product} = useLocation();
  console.log('product', product);
  return (
    <div style={{ padding: "10px" , width: "100%", height: "100%"}}>
      <div style={{ display: "flex" , width: "100%", height: "100%"}}>
        <img src={product.image} alt={product.name} />
        <div className='pl-10 pr-10' style={{  textAlign: 'left'}}>
          <h1 style={{ fontSize: "40px" }} className='font-bold font-sans'>{product.name}</h1>
          <p className='mt-3'>{product.sku}</p>
          <p className='mt-5 mb-3 '>{product.description}</p>
          {product.bulletPoints.map((point) => <li className='pt-2 font-bold' style={{ marginLeft: "20px", }}>{point}</li>)}
          <button style={{ backgroundColor: "green", color: "white", padding: "10px", margin: "10px", marginTop: "50px", borderRadius: 10 }}>Send Enquiry</button>
        </div>

      </div>


     
    </div>
  )
}

export default ProductDetail