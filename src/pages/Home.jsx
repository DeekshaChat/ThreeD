import React, {useState, useEffect} from 'react'
import Container from '../components/container/container';
// import { Carousel } from 'react-responsive-carousel';
import Img1 from './../assets/pic1.jpeg';
import Img2 from './../assets/pic2.jpeg';
import Img3 from './../assets/pic3.jpeg';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { EffectFade, Navigation } from "swiper/modules";
import Product from './Product';
import ProductGrid from '../components/product-types/ProductGrid';

const Carousel = () => {
  return (
    <Swiper
    navigation
    // modules={[Navigation]}
    className="mySwiper"
    autoPlay
    interval={1000}
    modules={[EffectFade, Navigation]} effect="fade"
    >
      <SwiperSlide>
        <img src={Img1} alt="Slide 1" className='w-full'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img2} alt="Slide 1" className='w-full'/>
      </SwiperSlide>
      {/* <SwiperSlide>
        <video controls>
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" className='w-full'/>
        </video>
      </SwiperSlide> */}
      <SwiperSlide>
        <img src={Img3} alt="Slide 1" className='w-full'/>
      </SwiperSlide>
    </Swiper>
  );
};

export default function Home() {
    const [posts, setPosts] = useState([]);
    
  if (posts.length === 0) {
    return (
      <>
          <Carousel />
          <ProductGrid/>
      </>

    )
  } else {
    return(
<div className='w-full py-8'>
  <Container>
    <div className='flex flex-wrap'>
      
    </div>
  </Container>
</div>
    )
  }
}