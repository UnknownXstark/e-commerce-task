import React from 'react'
import './Hero.css'
import ImageSlider from './ImageSlider'
import Popular from './Popular';

const Hero = () => {

    const slides = [
    {
      image: '/image1.jpg',
      title: "Flash Sale - Up to 50% Off!",
      desc: "Grab the hottest deals before they expire.",
    },
    {
      image: '/image2.jpg',
      title: "New Arrivals",
      desc: "Fresh styles just dropped. Check them out!",
    },
    {
      image: '/image3.jpg',
      title: "Top Picks for You",
      desc: "Recommended products based on your taste.",
    },
  ];

  return (
    <div className='hero'>   
        <div className='hero-top'>
            <ImageSlider slides={slides} />
        </div>
    </div>
  )
}

export default Hero