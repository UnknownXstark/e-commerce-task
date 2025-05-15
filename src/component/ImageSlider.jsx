import { useState } from "react";
import "./ImageSlider.css";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider-container">
      <div
        className="slide"
        style={{
          backgroundImage: `url(${slides[currentIndex].image})`,
        }}
      >
        <div className="slide-content">
          <h2>{slides[currentIndex].title}</h2>
          <p>{slides[currentIndex].desc}</p>
          <button>Shop Now</button>
        </div>
        <button className="navigation-btn left" onClick={goToPrevious}>❮</button>
        <button className="navigation-btn right" onClick={goToNext}>❯</button>
      </div>
    </div>
  );
};

export default ImageSlider;