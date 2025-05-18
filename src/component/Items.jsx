import React from "react";
import "./Items.css";
import { Link } from "react-router-dom";

const Items = () => {
  return (
    <div className="item">
      <div className="item-image">
        <Link to='/product'><img src={"/men-shoe1.jpg"} alt="" /></Link>
      </div>
      <p>
        Men's Fashion Dress Mesh <br />
        Sneakers Casual Walking <br />
        Business Oxfords Lace-Up <br />
        Comfortable Breathable Lightweight Shoes
      </p>
      <div className="item-prices">
        <div className="item-price-new">
          <p>₦76,389.25</p>
        </div>
        <div className="item-price-old">
          <p>₦91,000.00</p>
        </div>
      </div>
    </div>
  );
};

export default Items;
