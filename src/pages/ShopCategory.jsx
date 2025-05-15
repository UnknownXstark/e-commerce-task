import React from "react";
import "./ShopCategory.css";
import Items from "../component/items";
import { BsChevronDown } from "react-icons/bs";


const ShopCategory = () => {
  return (
    <div className="shop-category">
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span> Out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <BsChevronDown />
        </div>
      </div>
      <div className="shopcategory-products">
        <Items />
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
