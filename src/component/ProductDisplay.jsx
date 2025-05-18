import React, { useContext } from "react";
import "./ProductDisplay.css";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext"

const ProductDisplay = () => {
  const { addToCart } = useContext(ShopContext);

  const product = {
    id: 1,
    title: "Fashion Sneakers",
    price: 76389.25,
    image: "/men-shoe1.jpg",
  };
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img
            src="/men-shoe1.jpg"
            alt=""
            style={{ width: "70px", height: "70px", objectFit: "contain" }}
          />
          <img
            src="/men-shoe2.jpg"
            alt=""
            style={{ width: "70px", height: "70px", objectFit: "contain" }}
          />
          <img
            src="/men-shoe3.jpg"
            alt=""
            style={{ width: "70px", height: "70px", objectFit: "contain" }}
          />
          <img
            src="/men-shoe4.jpg"
            alt=""
            style={{ width: "70px", height: "70px", objectFit: "contain" }}
          />
        </div>
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src="/men-shoe1.jpg"
            alt=""
            style={{ width: "300px", height: "300px", objectFit: "contain" }}
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>Fashion Sneakers</h1>
        <div className="productdisplay-right-star">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarHalf />
          <p>(115)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-prices-old">₦91,000.00</div>
          <div className="productdisplay-right-prices-new">₦76,389.25</div>
        </div>
        <div className="productdisplay-right-description">
          Mens Shoes Men's Fashion Dress Mesh Sneakers Men Walking Business
          Oxfords Lace-Up Shoes for Men Footwear.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>7.5</div>
            <div>8</div>
            <div>9</div>
            <div>9.5</div>
            <div>10</div>
          </div>
        </div>
        <button onClick={() => addToCart(product)}>ADD TO CART</button>{" "}
      </div>
    </div>
  );
};

export default ProductDisplay;
